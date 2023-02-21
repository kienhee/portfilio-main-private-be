/** @format */

const express = require("express");
const router = express.Router();
const projectController = require("../controllers/projectController");

router.post("/project/create-project", projectController.handleCreateProject);
router.get("/project/get-all-project", projectController.getAllprojects);
module.exports = router;
