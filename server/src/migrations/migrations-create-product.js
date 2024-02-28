'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Products', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            categoryId: {
                type: Sequelize.INTEGER,
            },
            productName: {
                type: Sequelize.STRING,
            },
            price: {
                type: Sequelize.DECIMAL(15, 0),
            },
            discount: {
                type: Sequelize.INTEGER,
            },
            description: {
                type: Sequelize.TEXT,
            },
            genderFor: {
                type: Sequelize.STRING,
            },
            productType: {
                type: Sequelize.STRING,
            },
            glassSurface: {
                type: Sequelize.STRING,
            },
            shellMaterial: {
                type: Sequelize.STRING,
            },
            wireMaterial: {
                type: Sequelize.STRING,
            },
            waterproofDeft: {
                type: Sequelize.STRING,
            },
            shape: {
                type: Sequelize.STRING,
            },
            dimension: {
                type: Sequelize.STRING,
            },
            thichness: {
                type: Sequelize.STRING,
            },
            sizeWire: {
                type: Sequelize.STRING,
            },
            origin: {
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
        await queryInterface.dropTable('Products');
    },
};
