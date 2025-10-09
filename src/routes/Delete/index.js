import express from "express";
import fs from "fs";
import path from "path";
const router = express.Router();


// Get the directory name of the current module
//why is it modern : because 
// __dirname is not available in ES modules by default
// so we use path.resolve() to get the current directory
//modern than : fileURLToPath(import.meta.url) and path.dirname()
//because it is simpler and cleaner

const __dirname = path.resolve();

// Delete file route
router.delete("/delete/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(__dirname, "filestorage", fileName);

  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    res.send(`File "${fileName}" has been deleted.`);
  } else {
    res.status(404).send(`File "${fileName}" not found.`);
  }
});

export default router;
