'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Checks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Times, {as: 'Times'})
      this.belongsTo(models.Subjects, { foreignKey: 'subject_id', as: 'Subjects' })
      this.belongsTo(models.Rooms, { foreignKey: 'room_id', as: 'Rooms' })
      this.belongsTo(models.Majors, { foreignKey: 'major_id', as: 'Majors' })
    }
  }
  Checks.init({
    create_id: DataTypes.INTEGER, // ผู้สร้าง
    subject_id: DataTypes.INTEGER, // สาขาที่ต้องเข้าเรียน
    room_id: DataTypes.INTEGER, // ห้องที่เรียน
    major_id: DataTypes.INTEGER, // สาขาที่ต้องเข้าเรียน
    checkin_status: DataTypes.BOOLEAN, // อนุญาติให้เข้าเรียนหรือไม่
    checkout_status: DataTypes.BOOLEAN, // อนุญาติให้ออกเรียนหรือไม่
    date: DataTypes.DATE, // วันที่เข้าเรียน
    time_start: DataTypes.TIME, // เวลาเริ่มเรียน
    time_end: DataTypes.TIME // เวลาสิ้นสุดการเรียน
  }, {
    sequelize,
    modelName: 'Checks',
    underscored: true,
    freezeTableName: true,
  });
  return Checks;
};