/** @format */

const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.post(
  "/project/create-project",
  projectController.upload.single("urlImage"),
  projectController.handleCreateProject,
);
module.exports = router;
