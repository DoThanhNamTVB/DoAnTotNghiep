"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Products", {
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
                type: Sequelize.DECIMAL(15, 2),
            },
            discount: {
                type: Sequelize.INTEGER,
            },
            quantity: {
                type: Sequelize.INTEGER,
            },
            description: {
                type: Sequelize.TEXT,
            },
            genderFor: {
                type: Sequelize.BOOLEAN,
            },
            productType: {
                type: Sequelize.TEXT,
            },
            glassSurface: {
                type: Sequelize.TEXT,
            },
            shellMaterial: {
                type: Sequelize.TEXT,
            },
            wireMaterial: {
                type: Sequelize.TEXT,
            },
            waterproofDeft: {
                type: Sequelize.TEXT,
            },
            color: {
                type: Sequelize.TEXT,
            },
            shape: {
                type: Sequelize.TEXT,
            },
            dimension: {
                type: Sequelize.TEXT,
            },
            thichness: {
                type: Sequelize.FLOAT,
            },
            sizeWire: {
                type: Sequelize.FLOAT,
            },
            origin: {
                type: Sequelize.TEXT,
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
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Products");
    },
};
