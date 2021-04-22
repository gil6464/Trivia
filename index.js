const { countryMain, questiontypeone, questiontypetwo } = require("./models");
const Sequelize = require("Sequelize");
const sequelize = require("sequelize");
const { Op } = require("sequelize");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const router = express.Router();

// Get country that name is Switzerland
// countryMain.findOne({ where: { country: "Switzerland" } }).then(country => {
//   console.log(country.toJSON());
// });

// Get country that GDP > 35000
const answar = async () => {
  await countryMain
    .findAll({ where: { GDP: { [Op.gte]: 35000 } } })
    .then(countries => {
      return countries.map(country => country.toJSON());
    });
};

app.get("/question/typeone", (req, res) => {
  const questions = questiontypeone
    .findOne({ where: { id: Math.floor(Math.random() * 10) + 1 } })
    .then(question => {
      res.send(question.toJSON());
    });
});

// countryMain.findAll({ order: Sequelize.literal('rand()'), limit: 5 }).then((countries) => {
//   // single random encounter
// });

// order: [["price", "DESC"]],
//   limit: 1,
// { order: Sequelize.literal('rand()'), limit: 4 }
// function createQuestion() {
//   let country1 = getRandomCountry();
//   let country2 = getRandomCountry();
//   if (country1 === country2) {
//     //If they are the same then shuffle them both
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
