"use strict";
const generalData = require("../Data organizing/general");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("countriesgenerals", generalData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("countriesgenerals", null, {});
  },
};
