"use strict";
const { Model, STRING } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Order_Detail extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {}
    }
    Order_Detail.init(
        {
            orderId: DataTypes.INTEGER,
            productId: DataTypes.INTEGER,
            quantity: DataTypes.INTEGER,
            color: DataTypes.STRING,
            price: DataTypes.DECIMAL(15, 0),
            discount: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Order_Detail",
        }
    );
    return Order_Detail;
};
