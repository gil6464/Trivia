const { countryMain, questiontypeone, questiontypetwo } = require("../models");
const express = require("express");
const typeTwo = express.Router();
const Sequelize = require("Sequelize");
const sequelize = require("sequelize");
const { Op } = require("sequelize");

typeTwo.get("/", async (req, res) => {
  const result = await questiontypetwo
    .findOne({ order: sequelize.literal("rand()") })
    .then(question => {
      return question.toJSON();
    });
  const countries = await countryMain
    .findAll({ order: sequelize.literal("rand()"), limit: 4 })
    .then(countrys => {
      return countrys.map(country => country.toJSON());
    });
  result.countries = countries;
  result.correct = countries[0][result.column];
  res.send(result);
});

module.exports = typeTwo;