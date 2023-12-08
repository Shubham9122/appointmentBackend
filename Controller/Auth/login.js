import DoctorModal from "../../Models/doctorModal.js/doctor.js";
import bcrypt from "bcrypt";
import joi from "joi";

import jwtServices from "../../Service/jwtService.js";
const LoginUser = async (req, res, next) => {
  // validate user
  const validateUser = joi.object({
    email: joi.string().required("enter email"),
    password: joi
      .string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required("Enter your password"),
  });
  const { error } = validateUser.validate(req.body);
  if (error) {
    return next(error);
  }
  try {
    const findUser = await DoctorModal.findOne({ email: req.body.email });

    if (!findUser) {
      return res.status(404).json({ status: 404, message: "unAuthorised" });
    }
    console.log('findUser',findUser)
    const matchedPassword = await bcrypt.compare(
      req.body.password,
      findUser.password
    );
    console.log('matchPassword',matchedPassword)
    if (!matchedPassword) {
      return res
        .status(404)
        .json({ status: 404, message: "unAuthorised user" });
    }
    const accessToken = jwtServices.sign({ _id: findUser._id });
    res
      .status(200)
      .json({ status: 200, message: "Login Sucessfully", data: accessToken });
  } catch (error) {
    console.log(error);
    return res
      .status(404)
      .json({ status: 404, message: "Something went wrong" });
  }
};

export default LoginUser;
