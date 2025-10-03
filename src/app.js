import express from "express";
import dotenv from "dotenv";
import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

//Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "filestorage/");
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage });
//route
app.use("/uploads", express.static(path.join(__dirname, "filestorage")));

app.get("/", (req, res) => {
  res.render("main");
});

app.post("/upload", upload.single("file"), (req, res) => {
  res.redirect("/");
});

app.delete("/delete/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(__dirname, "filestorage", fileName);

  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    res.send(`File "${fileName}" has been deleted.`);
  } else {
    res.status(404).send(`File "${fileName}" not found.`);
  }
});

app.get("/view", (req, res) => {
  const uploadDirectory = path.join(__dirname, "filestorage");
  fs.readdir(uploadDirectory, (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading the upload directory.");
    } else {
      res.json({ files });
    }
  });
});
//export
export default app;
