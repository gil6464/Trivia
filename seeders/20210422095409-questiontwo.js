"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "questiontypetwos",
      [
        {
          template: "What is the capital of",
          column: "capital",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          template: "How many people live in",
          column: "population",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          template: "In what continent is",
          column: "continent",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          template: "What is the crime index of",
          column: "crimeIndex",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          template: "What is the cost of living index of",
          column: "qualityOfLifeIndex",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("questiontypetwos", null, {});
  },
};
