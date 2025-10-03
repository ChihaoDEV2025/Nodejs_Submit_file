import express from "express";
import dotenv from "dotenv";
import multer from "multer";
import path from "path";

const app = express();

//ejs

//route
app.get("/", (req, res, cb) => {
  res.render("index");
});
//export
export default app;
