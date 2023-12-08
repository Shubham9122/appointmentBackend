import PatientModal from "../../Models/patientModal/patient.js";

import joi from "joi";

const AddPatient = async (req, res, next) => {
  // validate user
  const validateUser = joi.object({
    name: joi.string().required("enter your full name name"),
    age: joi.number().required("Please Enter Age"),
    medicalHistory: joi.string().required("please enter medicalHistory"),
  });
  const { error } = validateUser.validate(req.body);
  if (error) {
    return next(error);
  }
  // pass data into the  request body
  let { name, age, medicalHistory } = req.body;

  const newDoctor = await new PatientModal({
    name,
    age,
    medicalHistory,
  });
  // Save New User

  try {
    const saveNewUser = await newDoctor.save();

    res.status(200).json({
      status: 200,
      message: "Register Patient Sucessfully",
      data: saveNewUser,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: 404, messgae: "Something went wrong" });
  }
};
export default AddPatient;
