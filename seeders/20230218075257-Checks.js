'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    data.map(item => {
      item.created_at = new Date()
      item.updated_at = new Date()
    })
    await queryInterface.bulkInsert('Checks', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Checks', null, {});
  }
};//

let currentDate = new Date();
let h = ("0" + (currentDate.getHours() + 1)).slice(-2);
let m = ("0" + (currentDate.getMinutes() + 1)).slice(-2);
let s = ("0" + (currentDate.getSeconds() + 1)).slice(-2);
let timeStamp = h + ':' + m + ':' + s;

let dd = ("0" + (currentDate.getDate() + 1)).slice(-2)
let mm = ("0" + (currentDate.getMonth() + 1)).slice(-2)
let yyyy = currentDate.getFullYear();
let dateStamp = yyyy + '-' + mm + '-' + dd;


const data = [
  {
    "id": 1,
    "user_id": 1,
    "subject_id": 1,
    "room_id": 1,
    "major_id": 4,
    "checkin_status": 1,
    "checkout_status": 0,
    "date": dateStamp,
    "time_start": timeStamp,
    "time_end": timeStamp,
  }
]
