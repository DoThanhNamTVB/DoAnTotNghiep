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
            Product.belongsTo(models.Category, { foreignKey: "categoryId" });
            Product.belongsToMany(models.Color, {
                through: "Product_Color",
                foreignKey: "productId",
            });

            Product.belongsToMany(models.User, {
                through: "Cart",
                // as: "Carts",
                foreignKey: "productId",
            });

            Product.belongsToMany(models.User, {
                through: "Product_Favourite",
                as: "Product_Favourites",
                foreignKey: "productId",
            });

            Product.belongsToMany(models.Order, {
                through: "Order_Detail",
                foreignKey: "productId",
            });
        }
    }
    Product.init(
        {
            categoryId: DataTypes.INTEGER,
            productName: DataTypes.STRING,
            price: DataTypes.DECIMAL(15, 0),
            discount: DataTypes.INTEGER,
            description: DataTypes.TEXT,
            genderFor: DataTypes.STRING,
            productType: DataTypes.STRING,
            glassSurface: DataTypes.STRING,
            shellMaterial: DataTypes.STRING,
            wireMaterial: DataTypes.STRING,
            waterproofDeft: DataTypes.STRING,
            shape: DataTypes.STRING,
            dimension: DataTypes.STRING,
            thichness: DataTypes.STRING,
            sizeWire: DataTypes.STRING,
            origin: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Product",
        }
    );
    return Product;
};
