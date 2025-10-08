//Configure storage

//disk storage is a method in multer to store files on disk
//two properties: destination - filename
const storage = multer.diskStorage({
  //where is the storage location or destination to reach
  destination: (req, file, cb) => {
    //if cb is null => automatically create filestorage folder
    cb(null, "filestorage/");
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()}-${file.originalname}`;

    //if null => no error and file name is fileName
    cb(null, fileName);
  },
});

const upload = multer({ storage });

//-----------------finish configure
//Step 2: create upload router
app.use("/uploads", express.static(path.join(__dirname, "filestorage")));

app.post("/upload", upload.single("file"), (req, res) => {
  res.redirect("/");
});

