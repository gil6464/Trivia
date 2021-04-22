const { countryMain, questiontypeone, questiontypetwo } = require("../models");
const express = require("express");
const router = express.Router();
const Sequelize = require("Sequelize");
const sequelize = require("sequelize");
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
  const countries = await countryMain
    .findAll({ order: sequelize.literal("rand()"), limit: 4 })
    .then(countrys => {
      return countrys.map(country => country.toJSON());
    });
  res.send(countries);
});

module.exports = router;
