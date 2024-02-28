const chartService = require('../services/chartService');

const chartRevenueMonth = async (req, res) => {
    try {
        const response = await chartService.chartRevenueMonth();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at chartRevenueMonth Controller : ' + error,
        });
    }
};

const chartOrder = async (req, res) => {
    try {
        const response = await chartService.chartOrder();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at chartOrder Controller : ' + error,
        });
    }
};

module.exports = {
    chartRevenueMonth,
    chartOrder,
};
