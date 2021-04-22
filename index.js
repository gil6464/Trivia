const { countryMain, questiontypeone, questiontypetwo } = require("./models");
const Sequelize = require("Sequelize");
const sequelize = require("sequelize");
const { Op } = require("sequelize");
const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
app.use(cors());

const typeOne = require("./api/typeOne");
const typeTwo = require("./api/typeTwo");

app.use("/typeOne", typeOne);
app.use("/typeTwo", typeTwo);

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
