import Express from "express";
import "./Database/Mongo.js";
import Route from "./Routes/route.js";
import cors from "cors";
const App = Express();
const port = process.env.Port || 3000;

App.use(cors());
App.use(Express.json());
App.use("/api", Route);
App.listen(port, () => {
  try {
    console.log("Server Connected");
  } catch (error) {
    console.log(error);
  }
});
