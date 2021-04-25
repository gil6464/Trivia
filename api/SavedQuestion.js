const { savedQuestion } = require("../models");
const express = require("express");
const SaveQuestion = express.Router();
const Sequelize = require("Sequelize");
const sequelize = require("sequelize");
const { Op } = require("sequelize");

// post new saved question(when rated).
SaveQuestion.post("/", (req, res) => {
  try {
    const questionToAdd = req.body;
    savedQuestion.create(questionToAdd).then(() => {
      res.send("Added successfully");
    });
  } catch (error) {
    res.send("There was a database failure!").status(500);
  }
});

// update new rating to saved question by id expecting {id:integer , rate:integer } in the request body.
SaveQuestion.patch("/", (req, res) => {
  try {
    const questionToUpdate = req.body;
    savedQuestion
      .findOne({ where: { id: questionToUpdate.id } })
      .then((question) => {
        savedQuestion.update(
          {
            rating: ratingCalculator(question, questionToUpdate.rate),
            ratingCounter: question.ratingCounter + 1,
          },
          { where: { id: questionToUpdate.id } }
        );
        res.send("updated successfully!");
        f;
      });
  } catch (error) {
    res.send("There was a database failure!").status(500);
  }
});

// Get one random saved question
SaveQuestion.get("/", (req, res) => {
  try {
    const result = savedQuestion
      .findOne({ order: sequelize.literal("rand()") })
      .then((question) => {
        return question.toJSON();
      })
      .then((err) => {
        if (err) res.send(err);
        res.send(result);
      });
  } catch (error) {
    res.send("There was a database failure!").status(500);
  }
});

function ratingCalculator(question, toAdd) {
  return (
    (question.rating * question.ratingCounter + toAdd) /
    (question.ratingCounter + 1)
  );
}

module.exports = SaveQuestion;
