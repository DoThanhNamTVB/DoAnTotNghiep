'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Color extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Color.belongsToMany(models.Product, {
                through: 'Product_Color',
                foreignKey: 'colorId',
            });
        }
    }
    Color.init(
        {
            colorName: DataTypes.STRING,
            slug: DataTypes.STRING,
            description: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'Color',
        }
    );
    return Color;
};
