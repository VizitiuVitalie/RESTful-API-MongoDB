import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";

const PORT = 44444;

export const EXTERNAL_URL = "http://localhost:44444";
const DB_URL = `your MongoDB cluster's link and user's password`;
const app = express();

app.use(express.json());
app.use(fileUpload());
app.use("/static", express.static("static"));
app.use("/api", router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
  } catch (e) {
    console.log(e);
  }
}

startApp();
