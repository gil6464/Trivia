const { Users } = require("../models");
const express = require("express");
const user = express.Router();
const Sequelize = require("Sequelize");
const sequelize = require("sequelize");
const { Op } = require("sequelize");

// Create a new user, expecting {name:string , score:integer }
user.post("/", (req, res) => {
  try {
    const newUser = req.body;
    Users.create(newUser).then(() => {
      res.send("User created!").status(201);
    });
  } catch (err) {
    res.send(err).status(500);
  }
});

user.get("/leaderboard", async (req, res) => {
  try {
    await Users.findAll({ order: [["score", "DESC"]] }).then(leaderboard => {
      res.send(leaderboard);
    });
  } catch (err) {
    res.send(err).status(500);
  }
});

module.exports = user;
