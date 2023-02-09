const authRouter = require("./auth")
const projectRouter = require("./project")
let baseUrl = "/api/"
const router = app => {
app.use(baseUrl,authRouter);
app.use(baseUrl, projectRouter);
}
module.exports = router