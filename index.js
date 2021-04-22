const { countryMain, questiontypeone, questiontypetwo } = require("./models");
const Sequelize = require("Sequelize");
const sequelize = require("sequelize");
const { Op } = require("sequelize");
const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
app.use(cors());

const countries = require("./api/countries");
const typeOne = require("./api/typeOne");
const typeTwo = require("./api/typeTwo");

app.use("/countries", countries);
app.use("/typeOne", typeOne);
app.use("/typeTwo", typeTwo);

// function createQuestion() {
//   let country1 = getRandomCountry();
//   let country2 = getRandomCountry();
//   if (country1 === country2) {
//If they are the same then shuffle them both
//     country1 = getRandomCountry();
//     country2 = getRandomCountry();
//   }

//   let question = {};
//   question.firstCountry = country1;
//   question.secondCountry = country2;
// }

// function getRandomCountry() {
//   // get
//   //todo get random country function
//   return "";
// }

app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
