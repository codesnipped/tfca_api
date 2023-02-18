'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Majors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Users, {as: 'Users'})
    }
  }
  Majors.init({
    faculty_id: DataTypes.INTEGER, // ตารางคณะ
    name: DataTypes.STRING // ชื่อสาขา
  }, {
    sequelize,
    modelName: 'Majors',
    underscored: true,
    freezeTableName: true,
  });
  return Majors;
};