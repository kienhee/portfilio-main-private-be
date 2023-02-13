/** @format */

const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.post(
  "/project/create-project",
  projectController.handleCreateProject
);
module.exports = router;
