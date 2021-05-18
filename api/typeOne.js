const { countryMain, questiontypeone, questiontypetwo } = require("../models");
const express = require("express");
const typeOne = express.Router();
const sequelize = require("sequelize");
const { validateToken } = require("./middlewares");
let countries;

function findCorrect(question) {
  const answers = question.countries.map((answer) => answer[question.column]);
  let correctAnswer;
  if (question.max) {
    const max = Math.max(...answers);
    correctAnswer = question.countries.find(
      (country) => country[question.column] === max
    );
    return correctAnswer.country;
  } else {
    const min = Math.min(...answers);
    correctAnswer = question.countries.find(
      (country) => country[question.column] === min
    );
    return correctAnswer.country;
  }
}

typeOne.get("/", validateToken, async (req, res) => {
  const result = await questiontypeone
    .findOne({ order: sequelize.literal("rand()") })
    .then((question) => {
      return question.toJSON();
    });
  let notNull = false;
  while (!notNull) {
    countries = await countryMain
      .findAll({ order: sequelize.literal("rand()"), limit: 4 })
      .then((countrys) => {
        return countrys.map((country) => country.toJSON());
      });
    const answers = countries.map((answer) => answer[result.column]);
    if (!answers.includes(null)) {
      notNull = true;
    }
  }

  result.countries = countries;

  result.correct = findCorrect(result);
  res.send(result);
});

module.exports = typeOne;
