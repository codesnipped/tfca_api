'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Checks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      create_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      subject_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Subjects',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      room_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Rooms',
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
      checkin_status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      checkout_status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      time_start: {
        type: Sequelize.TIME,
        allowNull: false
      },
      time_end: {
        type: Sequelize.TIME,
        allowNull: false
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
    await queryInterface.dropTable('Checks');
  }
};