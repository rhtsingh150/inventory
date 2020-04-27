'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Parts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sapcode: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      returnable: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.STRING
      },
      machineId: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Parts');
  }
};