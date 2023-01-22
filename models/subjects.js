'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subjects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Subjects.init({
    code: DataTypes.STRING, // รหัสวิชา
    name: DataTypes.STRING // ชื่อวิชา
  }, {
    sequelize,
    modelName: 'Subjects',
    underscored: true,
    freezeTableName: true,
  });
  return Subjects;
};