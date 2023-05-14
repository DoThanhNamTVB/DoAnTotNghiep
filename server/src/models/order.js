"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Order.belongsTo(models.User);
            Order.belongsToMany(models.Product, {
                through: "Order_Detail",
                foreignKey: "orderId",
            });
            Order.hasMany(models.Transaction, { foreignKey: "orderId" });
        }
    }
    Order.init(
        {
            userId: DataTypes.INTEGER,
            quantity: DataTypes.INTEGER,
            total_Price: DataTypes.DECIMAL(15, 2),
            status: DataTypes.STRING,
            userName: DataTypes.STRING,
            email: DataTypes.STRING,
            phone: DataTypes.STRING,
            address: DataTypes.STRING,
            notes: DataTypes.STRING,
            payment: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Order",
        }
    );
    return Order;
};
