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
        {
          title: 'To Kill a Mockingbird',
          author: 'Harper Lee',
          year: 1960,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Pride and Prejudice',
          author: 'Jane Austen',
          year: 1813,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'The Catcher in the Rye',
          author: 'J.D. Salinger',
          year: 1951,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'War and Peace',
          author: 'Leo Tolstoy',
          year: 1869,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Crime and Punishment',
          author: 'Fyodor Dostoevsky',
          year: 1866,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'The Lord of the Rings',
          author: 'J.R.R. Tolkien',
          year: 1954,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'The Hobbit',
          author: 'J.R.R. Tolkien',
          year: 1937,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Brave New World',
          author: 'Aldous Huxley',
          year: 1932,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'The Brothers Karamazov',
          author: 'Fyodor Dostoevsky',
          year: 1880,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Jane Eyre',
          author: 'Charlotte Brontë',
          year: 1847,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Wuthering Heights',
          author: 'Emily Brontë',
          year: 1847,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Anna Karenina',
          author: 'Leo Tolstoy',
          year: 1877,
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
