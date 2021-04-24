const { countryMain, questiontypeone, questiontypetwo } = require("../models");
const express = require("express");
const typeTwo = express.Router();
const Sequelize = require("Sequelize");
const sequelize = require("sequelize");
const { Op } = require("sequelize");
let countries;
typeTwo.get("/", async (req, res) => {
  const result = await questiontypetwo
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
  result.correct = countries[0][result.column];
  result.askOn = countries[0].country;
  result.countries = countries.sort(() => 0.5 - Math.random());
  res.send(result);
});

module.exports = typeTwo;
