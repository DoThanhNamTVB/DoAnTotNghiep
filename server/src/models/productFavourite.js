'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product_Favourite extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate() {
            // define association here
        }
    }
    Product_Favourite.init(
        {
            userId: DataTypes.INTEGER,
            productId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'Product_Favourite',
        }
    );
    return Product_Favourite;
};
