/** @format */

const mongoose = require("mongoose");

async function database() {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.MONGOAC}:${process.env.MONGOPW}@cluster0.tuuuw.mongodb.net/portfolio-app`);
    console.log("Kết nối cơ sở dữ liệu thành công");
  } catch (error) {
    console.log("Kết nối cơ sở dữ liệu thất bại,", error.message);
  }
}
module.exports = database;
