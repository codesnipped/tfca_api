'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    data.map(item => {
      item.created_at = new Date()
      item.updated_at = new Date()
    })
    await queryInterface.bulkInsert('Subjects', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Subjects', null, {});
  }
};

const data = [
  {
    "id": 1,
    "user_id": 1,
    "code": "619203",
    "name": "การวิเคราะห์ข้อมูลขนาดใหญ่และคลาวด์คอมพิวติ้ง"
  },
  {
    "id": 2,
    "user_id": 1,
    "code": "619218",
    "name": "การออกแบบและการติดตั้งเครือข่ายการสื่อสารไร้สาย"
  },
  {
    "id": 3,
    "user_id": 1,
    "code": "619307",
    "name": "การพัฒนาซอฟต์แวร์เชิงวัตถุ"
  },
  {
    "id": 4,
    "user_id": 1,
    "code": "619201",
    "name": "การจัดการเทคโนโลยีดิจิทัลเชิงธุรกิจ"
  },
]
