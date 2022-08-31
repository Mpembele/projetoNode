'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tasks', [{
      description: 'Retirar o lixo',
      done: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Arrumar a cama',
      done: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Limpar o fogão',
      done: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      description: 'Estudar Sequelize',
      done: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }])},

  async down (queryInterface, Sequelize) {
   
  }
};
