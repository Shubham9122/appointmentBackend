import mongoose from "mongoose";
const Doctor = mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  department: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});
const DoctorModal = await mongoose.model("Doctor", Doctor);
export default DoctorModal;
