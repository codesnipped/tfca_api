'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    data.map(item => {
      item.created_at = new Date()
      item.updated_at = new Date()
    })
    await queryInterface.bulkInsert('Majors', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Majors', null, {});
  }
};

const data = [
  /* วิศวกรรมศาสตร์ */
  {
    "id": 1,
    "faculty_id": 1,
    "name": "สาขาวิชาวิศวกรรมสิ่งแวดล้อม"
  },
  {
    "id": 2,
    "faculty_id": 1,
    "name": "สาขาวิชาวิศวกรรมเครื่องกล"
  },
  {
    "id": 3,
    "faculty_id": 1,
    "name": "สาขาวิชาวิศวกรรมไฟฟ้า"
  },
  {
    "id": 4,
    "faculty_id": 1,
    "name": "สาขาวิชาวิศวกรรมคอมพิวเตอร์ (IoT :Internet of Things)"
  },
  {
    "id": 5,
    "faculty_id": 1,
    "name": "สาขาวิชาวิศวกรรมความปลอดภัย"
  },
  {
    "id": 6,
    "faculty_id": 1,
    "name": "สาขาวิชาวิศวกรรมโยธา"
  },
  {
    "id": 7,
    "faculty_id": 1,
    "name": "สาขาวิชาวิศวกรรมอุตสาหการ"
  },

  /* คณะบริหารธุรกิจ */
  {
    "id": 8,
    "faculty_id": 2,
    "name": "สาขาวิชาการบัญชี"
  },
  {
    "id": 9,
    "faculty_id": 2,
    "name": "สาขาการตลาดยุคดิจิทัล"
  },
  {
    "id": 10,
    "faculty_id": 2,
    "name": "สาขาวิชาการจัดการ"
  },
  {
    "id": 11,
    "faculty_id": 2,
    "name": "สาขาวิชาการบริหารทรัพยากรมนุษย์"
  },
  {
    "id": 12,
    "faculty_id": 2,
    "name": "สาขาวิชาระบบสารสนเทศเพื่อธุรกิจดิจิทัล"
  },
  {
    "id": 13,
    "faculty_id": 2,
    "name": "สาขาวิชาการจัดการนวัตกรรมการค้า"
  },

  /* คณะศิลปศาสตร์และวิทยาศาสตร์ */
  {
    "id": 14,
    "faculty_id": 3,
    "name": "สาขาวิชาดิจิทัลมีเดีย"
  },
  {
    "id": 15,
    "faculty_id": 3,
    "name": "สาขาวิชาภาษาอังกฤษธุรกิจ"
  },
  {
    "id": 16,
    "faculty_id": 3,
    "name": "สาขาเทคโนโลยีดิจิทัลและนวัตกรรม"
  },
  {
    "id": 17,
    "faculty_id": 3,
    "name": "สาขาวิชารัฐประศาสนศาสตร์"
  },

  /* คณะนิติศาสตร์ */
  {
    "id": 18,
    "faculty_id": 4,
    "name": "สาขาวิชานิติศาสตร์"
  }
]
