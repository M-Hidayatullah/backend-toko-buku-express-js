'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Categories', [{
            name: 'Bussines & Economics',
            user: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            name: 'Art & Design',
            user: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
        }, {
            name: 'algriculture',
            user: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Categories', null, {});
    }
};