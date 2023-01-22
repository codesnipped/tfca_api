'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Settings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Settings.init({
    hardware_mode: DataTypes.STRING, // โหมดการทำงานของฮาร์ดแวร์ cloud หรือ local
    tos_detail: DataTypes.TEXT // รายละเอียดของเงื่อนไขการใช้งาน
  }, {
    sequelize,
    modelName: 'Settings',
    underscored: true,
    freezeTableName: true,
  });
  return Settings;
};