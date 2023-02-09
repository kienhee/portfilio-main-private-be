/** @format */

const mongoose = require("mongoose");
const { Schema } = mongoose;

const user = new Schema({
  email: String,
  password: String,
  fullname: String,
  year: String,
  phone: String,
  address: String,
  url_avatar: String,
});
const User = mongoose.model("users", user);
module.exports = User;
