"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Product.init(
        {
            categoryId: DataTypes.INTEGER,
            productName: DataTypes.STRING,
            price: DataTypes.DECIMAL(15, 2),
            discount: DataTypes.INTEGER,
            quantity: DataTypes.INTEGER,
            description: DataTypes.TEXT,
            genderFor: DataTypes.BOOLEAN,
            productType: DataTypes.TEXT,
            glassSurface: DataTypes.TEXT,
            shellMaterial: DataTypes.TEXT,
            wireMaterial: DataTypes.TEXT,
            waterproofDeft: DataTypes.TEXT,
            color: DataTypes.TEXT,
            shape: DataTypes.TEXT,
            dimension: DataTypes.TEXT,
            thichness: DataTypes.FLOAT,
            sizeWire: DataTypes.FLOAT,
            origin: DataTypes.TEXT,
        },
        {
            sequelize,
            modelName: "Product",
        }
    );
    return Product;
};
