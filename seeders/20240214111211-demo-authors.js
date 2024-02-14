'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('Authors', [{
        id: 1,
        name: 'Ashley Galvin',
        createdAt: new Date(),
        updatedAt: new Date()      
      }]),
      queryInterface.bulkInsert('Authors', [{
        id: 2,
        name: 'Patrick Beach',
        createdAt: new Date(),
        updatedAt: new Date()   
      }]),
      queryInterface.bulkInsert('Authors', [{
        id: 3,
        name: 'MacKenzie Miller',
        createdAt: new Date(),
        updatedAt: new Date()   
      }])
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Authors', null, {});
  }
};