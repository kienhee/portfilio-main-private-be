/** @format */

const mongoose = require("mongoose");
const { Schema } = mongoose;

const project = new Schema({
  title: String,
  content: String,
  github: String,
  urlImage: String,
});
const Project = mongoose.model("projects", project);
module.exports = Project;
