require("dotenv").config();
const { REFRESH_TOKEN_SECRET, ACCSSES_TOKEN_SECRET } = process.env;
const { Users, refreshToken } = require("../models");
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
  const player = await Users.findOne({ where: { name } }).then(player => {
    return player && player.toJSON();
  });
  if (player) {
    return res.send("Username already taken.").status(409);
  }
  const hashPassword = hashSync(password, 10);
  Users.create({ name, password: hashPassword }).then(() => {
    res.send("User created succesfully").status(201);
  });
});

user.post("/login", async (req, res) => {
  const { name, password } = req.body;
  const player = await Users.findOne({ where: { name } }).then(player => {
    return player && player.toJSON();
  });
  if (!player) {
    return res.status(403).send("User or password incorrect");
  }
  const checkPass = await compare(password, player.password);
  if (!checkPass) {
    return res.status(403).send("User or password incorrect");
  }
  const accssesToken = jwt.sign(player, ACCSSES_TOKEN_SECRET, {
    expiresIn: "10m",
  });
  const rToken = jwt.sign(player, REFRESH_TOKEN_SECRET);
  refreshToken.create({ token: rToken }).then(() => {
    res.json({ name, accssesToken, rToken });
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
