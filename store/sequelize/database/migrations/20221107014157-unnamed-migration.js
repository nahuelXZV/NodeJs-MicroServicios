'use strict';

/** @type {import('sequelize-cli').Migration} */
const { USER_TABLE, UserSchema } = require('../models/userModel');
const { AUTH_TABLE, AuthSchema } = require('../models/authModel');


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(AUTH_TABLE, AuthSchema);

    // Add others migrations here
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(AUTH_TABLE);

    // Add others migrations here
  }
};
