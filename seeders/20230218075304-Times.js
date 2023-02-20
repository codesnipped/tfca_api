'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    data.map(item => {
      item.created_at = new Date()
      item.updated_at = new Date()
    })
    await queryInterface.bulkInsert('Times', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Times', null, {});
  }
};

let currentDate = new Date();
let h = currentDate.getHours();
let m = currentDate.getMinutes();
let s = currentDate.getSeconds();
let timeStamp = h + ':' + m + ':' + s;

const data = [
  {
    "id": 1,
    "check_id": 1,
    "user_id": 1,
    "qrcode": "test",
    "time_start": timeStamp,
    "time_end": timeStamp,
  }
]
