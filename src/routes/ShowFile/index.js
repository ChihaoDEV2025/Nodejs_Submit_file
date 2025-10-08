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