'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    data.map(item => {
      item.created_at = new Date()
      item.updated_at = new Date()
    })
    await queryInterface.bulkInsert('Rooms', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Rooms', null, {});
  }
};

const data = [
  {
    "id": 1,
    "name": "IT301"
  },
  {
    "id": 2,
    "name": "IT302"
  },
  {
    "id": 3,
    "name": "IT303"
  },
  {
    "id": 4,
    "name": "IT304"
  },
  {
    "id": 5,
    "name": "IT305"
  },
]
