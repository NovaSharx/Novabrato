'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Highscore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      Highscore.belongsTo(User, { foreignKey: 'userId'})
    }
  }
  Highscore.init({
    highscoreId: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.SMALLINT
    },
    userName: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    highscore: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    exercise: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    underscored: true,
    modelName: 'Highscore',
  });
  return Highscore;
};