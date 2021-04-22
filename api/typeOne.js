const { countryMain, questiontypeone, questiontypetwo } = require("../models");
const express = require("express");
const typeOne = express.Router();
const Sequelize = require("Sequelize");
const sequelize = require("sequelize");
const { Op } = require("sequelize");

typeOne.get("/", async (req, res) => {
  const result = await questiontypeone
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

module.exports = typeOne;
