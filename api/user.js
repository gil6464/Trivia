const { Users, refreshTokens } = require("../models");
const express = require("express");
const user = express.Router();
const { hashSync, compare } = require("bcrypt");
const jwt = require("jsonwebtoken");

// step 1 user => pass => bcrypt => save user+hashPass. sign up in first time
// step 2 login- user,pass => check compare(pass, hashPass) - if (!valid) => return.
// step 3 user get accsses token that expire in few min, and refresh token that saved in the DB until he log out
//  he will send to the server the refresh token to get new accsses token.

// Create a new user, expecting {name:string , score:integer }

user.post("/register", async (req, res) => {
  const { name, password } = req.body;
  const checkIfExist = await Users.findOne({ where: { name } }).then(player => {
    return player && player.toJSON();
  });
  if (checkIfExist) {
    return res.send("Username already taken.").status(409);
  }
  const hashPassword = hashSync(password, 10);
  Users.create({ name, password: hashPassword }).then(() => {
    res.send("User created succesfully").status(201);
  });
});

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
