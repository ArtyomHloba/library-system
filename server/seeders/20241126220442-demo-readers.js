'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Readers',
      [
        {
          name: 'John Doe',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Jane Smith',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Alice Johnson',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Readers', null, {})
  }
}
