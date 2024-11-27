'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Issues',
      [
        {
          issueDate: '2024-11-26',
          bookId: 1,
          readerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          issueDate: '2024-11-25',
          bookId: 2,
          readerId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          issueDate: '2024-11-24',
          bookId: 3,
          readerId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Issues', null, {});
  },
};
