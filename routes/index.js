const express = require("express");
const multer = require("multer");
const Picture = require("../models/Picture");

const router = express.Router();
const upload = multer({ dest: "./public/uploads/" }); // Configuration part. The files are saved inside the folder "/public/uploads"

/* GET home page */
router.get("/", (req, res, next) => {
  Picture.find()
  .then(pictures => {
    res.render('index', {pictures})
  })
});

// upload.single("photo") => middleware, a function of (req,res,next)
// This middleware take the content from <input type="file" name="photo">
// and define a req.file, an object with information about the uploaded file
router.post("/upload", upload.single("photo"), (req, res) => {
  console.log("TCL: req.file", req.file)
  const pic = new Picture({
    name: req.body.name,
    path: `/uploads/${req.file.filename}`,
    originalName: req.file.originalname
  });

  pic.save(err => {
    res.redirect("/");
  });
});

module.exports = router;
