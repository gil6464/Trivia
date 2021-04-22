"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "questiontypeones",
      [
        {
          template: "Which country is most populous?",
          column: "population",
          max: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          template: "Which country is least populous?",
          column: "population",
          max: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          template: "Which country is the largest by total area?",
          column: "area",
          max: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          template: "Which country is the smallest by total area?",
          column: "area",
          max: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          template: "Which country is the most densely populated?",
          column: "populationDensity",
          max: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          template: "Which country is the least densely populated?",
          column: "populationDensity",
          max: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          template: "Which country has the most cell phones per person?",
          column: "phones",
          max: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          template: "Which country is the richest?",
          column: "GDP",
          max: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          template:
            "Which country has the most people aged 0-14(rational to country population)?",
          column: "age0To14",
          max: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("questiontypeones", null, {});
  },
};
