/** @format */

const Controller = require("./Controller");
const controller = new Controller("projects");
const project = require("../models/project")

const handleCreateProject = async (req, res) => {
  try {
    let { title, content, github, urlImage } = req.body;
    if (title && content && github && urlImage) {
      let response = await project.create({ title, content, github, urlImage })
      if (response) {
        return controller.response(res, "Tạo Dự án thành công", 200, response, true);
      } else {
        return controller.response(res, "Tạo Dự án không thành công", 200, response, false);
      }

    } else {
      return controller.response(res, "Vui lòng nhập đầy đủ thông tin", 200, [], false);
    }
  } catch (error) {
    return controller.response(res, error.message, error.status, response, false);
  }
}

module.exports = { handleCreateProject };
