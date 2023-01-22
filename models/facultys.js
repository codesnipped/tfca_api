'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Facultys extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Majors, {as: 'Majors'})
      this.hasMany(models.Users, {as: 'Users'})
    }
  }
  Facultys.init({
    name: DataTypes.STRING // ชื่อคณะ
  }, {
    sequelize,
    modelName: 'Facultys',
    underscored: true,
    freezeTableName: true,
  });
  return Facultys;
};