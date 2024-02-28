'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Orders', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            userId: {
                type: Sequelize.INTEGER,
            },
            quantity: {
                type: Sequelize.INTEGER,
            },
            total_Price: {
                type: Sequelize.DECIMAL(15, 2),
            },
            status: {
                type: Sequelize.STRING,
            },
            userName: {
                type: Sequelize.STRING,
            },
            email: {
                type: Sequelize.STRING,
            },
            phone: {
                type: Sequelize.STRING,
            },
            address: {
                type: Sequelize.STRING,
            },
            notes: {
                type: Sequelize.STRING,
            },
            payment: {
                type: Sequelize.STRING,
            },
            reason: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface) {
        await queryInterface.dropTable('Orders');
    },
};
