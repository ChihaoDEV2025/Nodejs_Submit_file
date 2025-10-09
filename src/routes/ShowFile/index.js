import express from "express";
import fs from "fs";
import path from "path";
const router = express.Router();

router.get("/view", (req, res) => {
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

export default router;
//export
