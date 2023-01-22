'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Imgs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Users, { foreignKey: 'user_id', as: 'Users' })
    }
  }
  Imgs.init({
    user_id: DataTypes.INTEGER,
    path: DataTypes.STRING,
    round_correct: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Imgs',
    underscored: true,
    freezeTableName: true,
  });
  return Imgs;
};