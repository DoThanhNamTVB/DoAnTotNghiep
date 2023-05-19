const db = require("../models/index");
const { sequelize } = require("../models");
const { Op } = require("sequelize");

const chartRevenueMonth = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Order.findAll({
                attributes: [
                    [
                        sequelize.fn("month", sequelize.col("createdAt")),
                        "month",
                    ],
                    [sequelize.fn("year", sequelize.col("createdAt")), "year"],
                    // [sequelize.fn("day", sequelize.col("createdAt")), "day"],
                    [
                        sequelize.fn("sum", sequelize.col("total_Price")),
                        "total",
                    ],
                ],
                group: ["month", "year"],
                order: [["month", "DESC"]],
            });

            resolve({
                err: response ? 0 : 2,
                msg: response ? "get order mounth success" : "get fail !",
                response,
            });
        } catch (error) {
            reject(error);
        }
    });
};

const chartOrder = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const datenow = new Date();
            const dateLastMonth = new Date(
                datenow.getFullYear(),
                datenow.getMonth() - 1,
                datenow.getDate()
            );
            const response = await db.Order.findAll({
                attributes: [
                    "status",
                    [sequelize.fn("count", sequelize.col("status")), "count"],
                ],
                group: ["status"],
                // where: {
                //     createdAt: { [Op.gte]: dateLastMonth },
                // },
            });
            resolve({
                err: response ? 0 : 2,
                msg: response ? "get order success" : "get fail !",
                response,
            });
        } catch (error) {
            reject(error);
        }
    });
};

// const getCountStatusOrder = () => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const response = await db.Setting.findOne({ where: { id: id } });
//             resolve({
//                 err: response ? 0 : 2,
//                 msg: response ? "get info websites success" : "get fail !",
//                 response,
//             });
//         } catch (error) {
//             reject(error);
//         }
//     });
// };

module.exports = { chartRevenueMonth, chartOrder };
