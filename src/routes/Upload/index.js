import express from "express";
import multer from "multer";
import path from "path";

const router = express.Router();

const __dirname = path.resolve();
//Configure storage

const inventory = multer.diskStorage({
  destination: (request, file, callback) => {
    callback(null, "filestorage/");
  },
  filename: (request, file, cb) => {
    const fileName = `${Date.now()}-${file.originalname}`;

    //if null => no error and file name is fileName
    cb(null, fileName);
  },
});

const upload = multer({ inventory });

//-----------------finish configure
//Step 2: create upload router
router.use("/uploads", express.static(path.join(__dirname, "filestorage")));

router.post("/upload", upload.single("file"), (req, res) => {
  res.redirect("/");
});

export default router;

//===================End========================

//disk storage is a method in multer to store files on disk
//two properties: destination - filename
//where is the storage location or destination to reach
//if cb is null => automatically create filestorage folder
