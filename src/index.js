/** @format */
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT | 5000;
const database = require("./configs/database");
const router = require("./routes");
const path = require("path");
app.use("/static", express.static(path.join(__dirname, "public")));
database();
app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
router(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
