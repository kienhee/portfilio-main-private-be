/** @format */

const Controller = require("./Controller");
const controller = new Controller("projects");
const multer = require("multer");
const project = require("../models/project");


const upload = multer({ dest: "./src/public/uploads/" });

const handleCreateProject = (req, res) => {
  console.log(req.file);
  if (!req.file) {
    return res.send("Please upload a file");
  }
  res.send("File uploaded");
}

module.exports = { upload, handleCreateProject };
