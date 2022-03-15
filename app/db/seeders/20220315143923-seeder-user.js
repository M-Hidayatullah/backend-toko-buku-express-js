'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Users', [{
            name: 'M.Hidayatullah',
            email: 'admin@gmail.com',
            password: bcrypt.hashSync('admin', 10),
            createdAt: new Date(),
            updatedAt: new Date(),
        }], {});

    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Users', null, {});
    }
};