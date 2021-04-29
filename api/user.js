require("dotenv").config();
const { REFRESH_TOKEN_SECRET, ACCESS_TOKEN_SECRET } = process.env;
const { validateToken } = require("./middlewares");
const { Users, refreshToken } = require("../models");
const express = require("express");
const user = express.Router();
const { hashSync, compare } = require("bcrypt");
const jwt = require("jsonwebtoken");

// step 1 user => pass => bcrypt => save user+hashPass. sign up in first time
// step 2 login- user,pass => check compare(pass, hashPass) - if (!valid) => return.
// step 3 user get access token that expire in few min, and refresh token that saved in the DB until he log out
//  he will send to the server the refresh token to get new access token.
// Create a new user, expecting {name:string , score:integer }

user.post("/register", async (req, res) => {
  const { name, password } = req.body;
  const player = await Users.findOne({ where: { name } }).then((player) => {
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
  const player = await Users.findOne({ where: { name } }).then((player) => {
    return player && player.toJSON();
  });
  if (!player) {
    return res.status(403).send("User or password incorrect");
  }
  const checkPass = await compare(password, player.password);
  if (!checkPass) {
    return res.status(403).send("User or password incorrect");
  }
  const accessToken = jwt.sign(player, ACCESS_TOKEN_SECRET, {
    expiresIn: "10m",
  });
  const refToken = jwt.sign(player, REFRESH_TOKEN_SECRET);
  refreshToken.create({ token: refToken }).then(() => {
    res.json({ name, accessToken, refreshToken: refToken });
  });
});

user.post("/token", async (req, res) => {
  const { token } = req.body;
  if (!token) {
    return res.status(400).send("Refresh token needed");
  }
  const checkToken = await refreshToken.findOne({ where: { token } });
  if (!checkToken) {
    return res.status(403).send("Invalid refresh token");
  }
  jwt.verify(token, REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).send("Invalid Refresh Token");
    }
    const { name, password } = decoded;
    const accessToken = jwt.sign({ name, password }, ACCESS_TOKEN_SECRET, {
      expiresIn: "10m",
    });
    res.json({ accessToken });
  });
});
user.post("/score", validateToken, async (req, res) => {
  const { name, score } = req.body;
  try {
    await Users.update({ score }, { where: { name } });
  } catch (err) {
    res.send(err).status(500);
  }
});

user.get("/leaderboard", validateToken, async (req, res) => {
  try {
    await Users.findAll({ order: [["score", "DESC"]] }).then((leaderboard) => {
      res.send(leaderboard);
    });
  } catch (err) {
    res.send(err).status(500);
  }
});

module.exports = user;
