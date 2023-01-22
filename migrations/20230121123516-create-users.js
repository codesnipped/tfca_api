'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      faculty_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Facultys',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      major_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Majors',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      level: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      code: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      pass: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tos: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};