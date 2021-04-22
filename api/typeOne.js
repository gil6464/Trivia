const { countryMain, questiontypeone, questiontypetwo } = require("../models");
const express = require("express");
const typeOne = express.Router();
const Sequelize = require("Sequelize");
const sequelize = require("sequelize");
const { Op } = require("sequelize");
let countries;

function findCorrect(question) {
  const answers = question.countries.map(answer => answer[question.column]);

  if (question.max) {
    return Math.max(...answers);
  } else {
    return Math.min(...answers);
  }
}

typeOne.get("/", async (req, res) => {
  const result = await questiontypeone
    .findOne({ order: sequelize.literal("rand()") })
    .then(question => {
      return question.toJSON();
    });
  let notNull = false;
  while (!notNull) {
    countries = await countryMain
      .findAll({ order: sequelize.literal("rand()"), limit: 4 })
      .then(countrys => {
        return countrys.map(country => country.toJSON());
      });
    const answers = countries.map(answer => answer[result.column]);
    if (!answers.includes(null)) {
      notNull = true;
    }
  }

  result.countries = countries;

  result.correct = findCorrect(result);
  res.send(result);
});

module.exports = typeOne;
