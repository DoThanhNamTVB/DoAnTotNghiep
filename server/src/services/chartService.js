const db = require('../models/index');
const { sequelize } = require('../models');

const chartRevenueMonth = async () => {
    try {
        const response = await db.Order.findAll({
            attributes: [
                [sequelize.fn('month', sequelize.col('createdAt')), 'month'],
                [sequelize.fn('year', sequelize.col('createdAt')), 'year'],
                // [sequelize.fn("day", sequelize.col("createdAt")), "day"],
                [sequelize.fn('sum', sequelize.col('total_Price')), 'total'],
            ],
            group: ['month', 'year'],
            order: [['month', 'DESC']],
        });

        return {
            err: response ? 0 : 2,
            msg: response ? 'get order mounth success' : 'get fail !',
            response,
        };
    } catch (error) {
        throw new Error(error);
    }
};

const chartOrder = async () => {
    try {
        // const datenow = new Date();
        // const dateLastMonth = new Date(datenow.getFullYear(), datenow.getMonth() - 1, datenow.getDate());
        const response = await db.Order.findAll({
            attributes: ['status', [sequelize.fn('count', sequelize.col('status')), 'count']],
            group: ['status'],
            // where: {
            //     createdAt: { [Op.gte]: dateLastMonth },
            // },
        });
        return {
            err: response ? 0 : 2,
            msg: response ? 'get order success' : 'get fail !',
            response,
        };
    } catch (error) {
        throw new Error(error);
    }
};

// const getCountStatusOrder = () => {
//
//         try {
//             const response = await db.Setting.findOne({ where: { id: id } });
//             return{
//                 err: response ? 0 : 2,
//                 msg: response ? "get info websites success" : "get fail !",
//                 response,
//             });
//         } catch (error) {
//             throw new Error(error)
//         }
//     });
// };

module.exports = { chartRevenueMonth, chartOrder };
