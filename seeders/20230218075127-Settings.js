'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    data.map(item => {
      item.created_at = new Date()
      item.updated_at = new Date()
    })
    await queryInterface.bulkInsert('Settings', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Settings', null, {});
  }
};

const data = [
  {
    "id": 1,
    "hardware_mode": "local",
    "tos_detail": "ผู้ใช้งานต้องยอมรับข้อตกลง"
  },
]
