'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    data.map(item => {
      item.created_at = new Date()
      item.updated_at = new Date()
    })
    await queryInterface.bulkInsert('Facultys', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Facultys', null, {});
  }
};

const data = [
  {
    "id": 1,
    "name": "คณะวิศวกรรมศาสตร์"
  },
  {
    "id": 2,
    "name": "คณะบริหารธุรกิจ"
  },
  {
    "id": 3,
    "name": "คณะศิลปศาสตร์และวิทยาศาสตร์"
  },
  {
    "id": 4,
    "name": "คณะนิติศาสตร์"
  },
]
