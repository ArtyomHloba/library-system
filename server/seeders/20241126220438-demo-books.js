'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Books',
      [
        {
          title: 'The Great Gatsby',
          author: 'F. Scott Fitzgerald',
          year: 1925,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: '1984',
          author: 'George Orwell',
          year: 1949,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Moby-Dick',
          author: 'Herman Melville',
          year: 1851,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  },
};
