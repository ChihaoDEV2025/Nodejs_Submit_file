//========================== App.js ============================
//# : comment for theory

//* : comment for code

import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();

//==========================File storage Configuration===========================

/*
  1. __filename = fileURLToPath() return the absolute path of the current module file

  2. __dirname = path.dirname() return the directory name of the current module file
*/
import path from "path";

const __dirname = path.resolve();
//// (or C:\Users\username\projects\file_submit on Windows)

//ejs
/*
  1. views is a available setting in express 
    => tell express you will set views as "path.join(__dirname,'view')"

  2. Because the routers will be inherited from app 
    => app.set is read first and set for routers
*/

app.set("view engine", "ejs"); //set view engine to ejs

app.set("views", path.join(__dirname, "view"));

//*path.join() => C:/Users/DELL/Desktop/multer/src/view

//-------------------------Routes-----------------------
import router from "./routes/index.js";
app.use("/", router);

export default app;

//==========================End App.js ============================
