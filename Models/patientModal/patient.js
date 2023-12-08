import mongoose from "mongoose";
const Patient = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  medicalHistory: {
    type: String,
    require: true,
  },
});
const PatientModal = mongoose.model("patient", Patient);
export default PatientModal;
