'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class savedQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  savedQuestion.init({
    question: DataTypes.STRING,
    column: DataTypes.STRING,
    correct: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    ratingCounter: DataTypes.INTEGER,
    option1: DataTypes.STRING,
    option2: DataTypes.STRING,
    option3: DataTypes.STRING,
    option4: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'savedQuestion',
  });
  return savedQuestion;
};