/** @format */
const jwt = require("jsonwebtoken");

class Controller {
  constructor(dbname) {
    this.databaseName = dbname;
  }
  response(res, message, status, data, success) {
    return res.status(status).json({ message, data, success });
  }
  signToken(data) {
    return jwt.sign(data, process.env.SECRET_KEY);
  }
}
module.exports = Controller;
