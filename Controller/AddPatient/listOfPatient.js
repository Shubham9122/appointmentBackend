import PatientModal from "../../Models/patientModal/patient.js";
const ListOfpatient = async (req, res) => {
  try {
    const getAllPatient = await PatientModal.find();
    if (getAllPatient === null) {
      return res
        .status(200)
        .json({ status: 200, message: "Not Patient Found", data: [] });
    }
    return res
      .status(200)
      .json({
        status: 200,
        message: "List of patient data",
        data: getAllPatient,
      });
  } catch (error) {
    console.log(error);
  }
};
export default ListOfpatient;
