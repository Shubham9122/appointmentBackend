
import PatientModal from '../../Models/patientModal/patient.js'
const EditPatient=async(req,res)=>{
    
    const {id}=req.params;
    const {name,age,medicalHostory}=req.body;
    try{
        const editPatient=await PatientModal.findByIdAndUpdate(
            {_id:id},
            {$set:{name,age,medicalHostory}},
            {new:true}

        );
        console.log('editPatien',editPatient)
        if(!editPatient){
            return  res.status(404).json({status:404,message:"patient not found"})
        }
        res.status(200).json({status:200,message:'Edit patient sucesfully',data:editPatient})
    }catch(error){
        console.log('error',error)
    }
}
export default EditPatient