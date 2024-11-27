'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Readers',
      [
        {
          name: 'John Doe',
          createdAt: new Date(),
          updatedAt: new Date(),
          phoneNumber: '+1-202-555-0133',
        },
        {
          name: 'Jane Smith',
          createdAt: new Date(),
          updatedAt: new Date(),
          phoneNumber: '+1-202-555-0176',
        },
        {
          name: 'Alice Johnson',
          createdAt: new Date(),
          updatedAt: new Date(),
          phoneNumber: '+1-202-555-0198',
        },
        {
          name: 'Bob Brown',
          createdAt: new Date(),
          updatedAt: new Date(),
          phoneNumber: '+1-202-555-0115',
        },
        {
          name: 'Charlie Davis',
          createdAt: new Date(),
          updatedAt: new Date(),
          phoneNumber: '+1-202-555-0147',
        },
        {
          name: 'David Wilson',
          createdAt: new Date(),
          updatedAt: new Date(),
          phoneNumber: '+1-202-555-0163',
        },
        {
          name: 'Eva Thomas',
          createdAt: new Date(),
          updatedAt: new Date(),
          phoneNumber: '+1-202-555-0182',
        },
        {
          name: 'Frank Moore',
          createdAt: new Date(),
          updatedAt: new Date(),
          phoneNumber: '+1-202-555-0199',
        },
        {
          name: 'Grace Taylor',
          createdAt: new Date(),
          updatedAt: new Date(),
          phoneNumber: '+1-202-555-0124',
        },
        {
          name: 'Henry Lee',
          createdAt: new Date(),
          updatedAt: new Date(),
          phoneNumber: '+1-202-555-0149',
        },
        {
          name: 'Ivy Harris',
          createdAt: new Date(),
          updatedAt: new Date(),
          phoneNumber: '+1-202-555-0168',
        },
        {
          name: 'Jack Clark',
          createdAt: new Date(),
          updatedAt: new Date(),
          phoneNumber: '+1-202-555-0173',
        },
        {
          name: 'Karen Adams',
          createdAt: new Date(),
          updatedAt: new Date(),
          phoneNumber: '+1-202-555-0187',
        },
        {
          name: 'Liam Scott',
          createdAt: new Date(),
          updatedAt: new Date(),
          phoneNumber: '+1-202-555-0195',
        },
        {
          name: 'Mia Edwards',
          createdAt: new Date(),
          updatedAt: new Date(),
          phoneNumber: '+1-202-555-0138',
        },
        {
          name: 'Noah Carter',
          createdAt: new Date(),
          updatedAt: new Date(),
          phoneNumber: '+1-202-555-0119',
        },
        {
          name: 'Olivia Turner',
          createdAt: new Date(),
          updatedAt: new Date(),
          phoneNumber: '+1-202-555-0172',
        },
        {
          name: 'Paul Walker',
          createdAt: new Date(),
          updatedAt: new Date(),
          phoneNumber: '+1-202-555-0189',
        },
        {
          name: 'Quinn Hill',
          createdAt: new Date(),
          updatedAt: new Date(),
          phoneNumber: '+1-202-555-0144',
        },
        {
          name: 'Ruby Young',
          createdAt: new Date(),
          updatedAt: new Date(),
          phoneNumber: '+1-202-555-0193',
        },
        {
          name: 'Sophia Hall',
          createdAt: new Date(),
          updatedAt: new Date(),
          phoneNumber: '+1-202-555-0128',
        },
        {
          name: 'Thomas King',
          createdAt: new Date(),
          updatedAt: new Date(),
          phoneNumber: '+1-202-555-0161',
        },
        {
          name: 'Uma Watson',
          createdAt: new Date(),
          updatedAt: new Date(),
          phoneNumber: '+1-202-555-0178',
        },
        {
          name: 'Victor Lopez',
          createdAt: new Date(),
          updatedAt: new Date(),
          phoneNumber: '+1-202-555-0156',
        },
        {
          name: 'Willow Barnes',
          createdAt: new Date(),
          updatedAt: new Date(),
          phoneNumber: '+1-202-555-0141',
        },
        {
          name: 'Xander Evans',
          createdAt: new Date(),
          updatedAt: new Date(),
          phoneNumber: '+1-202-555-0184',
        },
        {
          name: 'Yara Perry',
          createdAt: new Date(),
          updatedAt: new Date(),
          phoneNumber: '+1-202-555-0169',
        },
        {
          name: 'Zoe Martinez',
          createdAt: new Date(),
          updatedAt: new Date(),
          phoneNumber: '+1-202-555-0154',
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Readers', null, {});
  },
};
