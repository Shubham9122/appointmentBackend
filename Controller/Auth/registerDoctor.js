import DoctorModal from "../../Models/doctorModal.js/doctor.js";

import joi from "joi";
import bcrypt from "bcrypt";

const RegisterDoctor = async (req, res, next) => {
  // validate user
  const validateUser = joi.object({
    email: joi.string().required("please enter your email"),
    name: joi.string().required("enter your full name name"),
    password: joi
      .string()
      .pattern(
        new RegExp(/^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/\-=|]{3,30}$/),
        "password"
      )
      .required("enter your password"),
    department: joi.string().required("please enter department"),
  });
  const { error } = validateUser.validate(req.body);
  if (error) {
    return next(error);
  }
  // pass data into the  request body
  let { email, name, password, department } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const newDoctor = await new DoctorModal({
    email,
    name,
    password:hashedPassword,
    department,
  });
  // Save New User

  try {
    const saveNewUser = await newDoctor.save();

    res.status(200).json({
      status: 200,
      message: "Register User Sucessfully",
      data: saveNewUser,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: 404, messgae: "Something went wrong" });
  }
};
export default RegisterDoctor;
