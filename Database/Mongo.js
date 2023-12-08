import mongoose from "mongoose";
import {
  DATABASE_PROD_DB
} from "../Config/config.js"

mongoose
  .connect(DATABASE_PROD_DB)
  .then((res) => {
    console.log("Sucessfully database connected"+res);
  })
  .catch((err) => {
    console.log("error", err);
  });
