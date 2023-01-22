'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rooms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Checks, {as: 'Checks'})
    }
  }
  Rooms.init({
    name: DataTypes.STRING // ชื่อห้อง
  }, {
    sequelize,
    modelName: 'Rooms',
    underscored: true,
    freezeTableName: true,
  });
  return Rooms;
};