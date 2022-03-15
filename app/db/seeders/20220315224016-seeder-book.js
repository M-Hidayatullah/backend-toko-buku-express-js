'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Books', [{
            title: 'Garis Tangan',
            author: 'Fiersa Besari',
            image: '/uploads/book-1.png',
            published: new Date(),
            price: 15000,
            stock: 10,
            user: 6,
            category: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Books', null, {});

    }
};