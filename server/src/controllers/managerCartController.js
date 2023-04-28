const managerCartService = require("../services/managerCartService");

const getAllCartController = async (req, res) => {
    try {
        const response = await managerCartService.getAllCartService();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({
            err: -1,
            msg: "Fail at getAllCartController : " + error,
        });
    }
};

const getAnCartController = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await managerCartService.getAnCartService(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({
            err: -1,
            msg: "Fail at getAnCartController : " + error,
        });
    }
};

module.exports = {
    getAllCartController,
    getAnCartController,
};
