"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert("savedquestions", [{}], {});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("savedquestions", null, {});
	},
};
