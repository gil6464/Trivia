const { savedQuestion } = require("../models");
const express = require("express");
const SaveQuestion = express.Router();
const Sequelize = require("Sequelize");
const sequelize = require("sequelize");
const { Op } = require("sequelize");

SaveQuestion.post("/", (req, res) => {
  const questionToAdd = req.body;
  savedQuestion.create(questionToAdd).then(() => {
    res.send("Added successfully");
  });
});

SaveQuestion.patch("/", (req, res) => {
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
    });
});

// Get one saved question
SaveQuestion.get("/", (req, res) => {
  const result = savedQuestion
    .findOne({ order: sequelize.literal("rand()") })
    .then((question) => {
      return question.toJSON();
    })
    .then((err) => {
      if (err) res.send(err);
      res.send(result);
    });
});

function ratingCalculator(question, toAdd) {
  return (
    (question.rating * question.ratingCounter + toAdd) /
    (question.ratingCounter + 1)
  );
}

module.exports = SaveQuestion;
