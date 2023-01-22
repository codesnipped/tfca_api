'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Imgs, {as: 'Imgs'})
      this.belongsTo(models.Facultys, { foreignKey: 'faculty_id', as: 'Facultys' })
      this.belongsTo(models.Majors, { foreignKey: 'major_id', as: 'Majors' })
      this.hasMany(models.Times, {as: 'Times'})
    }
  }
  Users.init({
    faculty_id: DataTypes.INTEGER, // ตารางคณะ
    major_id: DataTypes.INTEGER, // ตารางสาขา
    level: DataTypes.INTEGER, // ระดับอาจารย์หรือนักศึกษา 1-2
    code: DataTypes.STRING, // ระดับอาจารย์หรือนักศึกษา 1-2
    email: DataTypes.STRING, // อีเมล์ล็อกอิน
    pass: DataTypes.STRING, // รหัาผ่านล็อกอิน
    fname: DataTypes.STRING, // ชื่อ
    lname: DataTypes.STRING, // นามสกุล
    tos: DataTypes.BOOLEAN, // ยอมรับเงื่อนไขการใช้งาน
  }, {
    sequelize,
    modelName: 'Users',
    underscored: true,
    freezeTableName: true,
  });
  return Users;
};