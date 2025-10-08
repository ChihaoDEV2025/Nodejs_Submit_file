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

