'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Times extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Checks, { foreignKey: 'check_id', as: 'Checks' })
      this.belongsTo(models.Users, { foreignKey: 'user_id', as: 'Users' })
    }
  }
  Times.init({
    check_id: DataTypes.INTEGER, // ตารงนี้เป็นการเชื่อมกับตาราง Checks โดยใช้ id ของตารางนั้น
    user_id: DataTypes.INTEGER, // ตารงนี้เป็นการเชื่อมกับตาราง Users โดยใช้ id ของตารางนั้น
    qrcode: DataTypes.STRING, // qr code กรณีแสกนไม่ผ่าน
    time_start: DataTypes.TIME, // เวลาเริ่มเข้าเรียนจริง
    time_end: DataTypes.TIME // เวลาสิ้นสุดการเข้าเรียนจริง
  }, {
    sequelize,
    modelName: 'Times',
    underscored: true,
    freezeTableName: true,
  });
  return Times;
};