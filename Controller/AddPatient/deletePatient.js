import PatientModal from "../../Models/patientModal/patient.js";
const DeletePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const deletePatient = await PatientModal.findByIdAndDelete(id);
    if (!deletePatient) {
      return res
        .status(404)
        .json({ status: 404, message: "patient not found" });
    }
    return (
      res,
      status(200).json({ status: 200, message: "delete patient sucessfully" })
    );
  } catch (error) {
    console.log(error);
  }
};
export default DeletePatient