'use strict';

const data = require('./data.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const users = data.users.map(item => ({
      ...item,
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    const types = data.types.map(item => ({
      ...item,
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    const todos = data.todos.map(item => ({
      ...item,
      createdAt: new Date(),
      updatedAt: new Date()
    }));

     await queryInterface.bulkInsert('Users', users, {});
     await queryInterface.bulkInsert('Types', types, {});
     await queryInterface.bulkInsert('Todos', todos, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Types', null, {});
    await queryInterface.bulkDelete('Todos', null, {});
  }
};
