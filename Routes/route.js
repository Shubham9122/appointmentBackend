import Express from "express";
import { Login, RegisterDoctor, AddPatient,EditPatient,DeletePatient } from "../Controller/index.js";

const router = Express.Router();

router.post("/loginDoctor", Login);
router.post("/registerDoctor", RegisterDoctor);
router.post("/addPatient", AddPatient);
router.put('/editPatient/:id',EditPatient)
router.delete('/deletePatient:/id',DeletePatient)

export default router;
