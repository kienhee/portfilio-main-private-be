/** @format */

const Controller = require("./Controller");
const controller = new Controller("users");
const user = require("../models/user");
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

const register = async (req, res) => {
  try {
    let { email, password, fullname, year, phone, address } = req.body;
    if (email && password && fullname && year && phone && address) {
      let findEmai = await user.findOne({ email });
      if (findEmai) return controller.response(res, "Email đã tồn tại", 200, [], false);
      let hash = bcrypt.hashSync(password, salt);
      let response = await user.create({ email, password: hash, fullname, year, phone, address });
      if (response) {
        return controller.response(res, "Tạo Tài khoản thành công", 200, response, true);
      } else {
        return controller.response(res, "Tạo Tài khoản không thành công", 200, response, false);
      }
    } else {
      return controller.response(res, "Vui lòng nhập đầy đủ thông tin", 200, [], false);
    }
  } catch (error) {
    controller.response(res, error.message, error.status, response, false);
  }
};
const login = async (req, res) => {
  try {
    let { email, password } = req.body;
    if (email && password) {
      let findAccount = await user.findOne({ email });
      if (findAccount && findAccount.email === email && bcrypt.compareSync(password, findAccount.password)) {
        let { _id, email, fullname, year, phone, address } = findAccount;
        let AccessToken = controller.signToken({ _id, email, fullname, year, phone, address });
        return controller.response(
          res,
          "Đăng nhập thành công",
          200,
          { _id, email, fullname, year, phone, address, AccessToken },
          true,
        );
      } else {
        return controller.response(res, "Tại khoản hoặc mật khẩu không chính xác", 200, [], false);
      }
    } else {
      return controller.response(res, "Vui lòng nhập đầy đủ thông tin", 200, [], false);
    }
  } catch (error) {
    controller.response(res, error.message, error.status, response, false);
  }
};
module.exports = { register, login };
