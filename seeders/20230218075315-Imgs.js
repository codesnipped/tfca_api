'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    data.map(item => {
      item.created_at = new Date()
      item.updated_at = new Date()
    })
    await queryInterface.bulkInsert('Imgs', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Imgs', null, {});
  }
};

const data = [
  {
    "id": 1,
    "user_id": 1,
    "path": "6319C10022-1.jpg",
    "round_correct": 0
  },
  {
    "id": 2,
    "user_id": 1,
    "path": "6319C10022-2.jpg",
    "round_correct": 0
  },
  {
    "id": 3,
    "user_id": 2,
    "path": "6319C10024-1.jpg",
    "round_correct": 0
  },
  {
    "id": 4,
    "user_id": 2,
    "path": "6319C10024-2.jpg",
    "round_correct": 0
  },
  {
    "id": 5,
    "user_id": 3,
    "path": "6319C10019-1.jpg",
    "round_correct": 0
  },
  {
    "id": 6,
    "user_id": 3,
    "path": "6319C10019-2.jpg",
    "round_correct": 0
  },
]
