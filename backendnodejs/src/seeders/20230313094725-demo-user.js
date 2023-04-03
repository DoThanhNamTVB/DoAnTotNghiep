'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      userName: 'Thành Nam',
      email: 'thanhnamtvb@gmail.com',
      phone: '0123456789',
      gender:1,
      address:'Nam Định',
      password:'thanhnam2001',
      role:'R1',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      userName: 'Admin',
      email: 'admin@gmail.com',
      phone: '0212121212',
      gender:1,
      address:'Nam Định',
      password:'admin2001',
      role:'R2',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
