'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    data.map(item => {
      item.created_at = new Date()
      item.updated_at = new Date()
    })
    await queryInterface.bulkInsert('Users', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};

const data = [
  {
    "id": 1,
    "faculty_id": 1,
    "major_id": 4,
    "level": 2,
    "code": "6319C10022",
    "email": "6319C10022@sau.ac.th",
    "pass": "password",
    "fname": "Prinya",
    "lname": "Chaitongrat",
    "tos": 1
  },
  {
    "id": 2,
    "faculty_id": 1,
    "major_id": 4,
    "level": 1,
    "code": "6319C10024",
    "email": "6319C10024@sau.ac.th",
    "pass": "password",
    "fname": "Pakphoom",
    "lname": "Sererjan",
    "tos": 1
  },
  {
    "id": 3,
    "faculty_id": 1,
    "major_id": 4,
    "level": 1,
    "code": "6319C10019",
    "email": "6319C10019@sau.ac.th",
    "pass": "password",
    "fname": "Tawon",
    "lname": "Tawon",
    "tos": 1
  },
]
