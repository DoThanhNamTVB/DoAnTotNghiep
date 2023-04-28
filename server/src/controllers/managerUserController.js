const managerUserServices = require("../services/managerUserService");

const getAllUser = async (req, res) => {
    try {
        const response = await managerUserServices.getAllUseService();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getAllUser Controller : " + error,
        });
    }
};

const getAnUser = async (req, res) => {
    try {
        const id = req.params.userId;
        const response = await managerUserServices.getAnUseService(id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getAnUser Controller : " + error,
        });
    }
};

const updateStatusUser = async (req, res) => {
    try {
        const { status } = req.body;
        const id = req.params.id;
        const response = await managerUserServices.updateStatusUserService(
            status,
            id
        );
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at updateStatusUser Controller : " + error,
        });
    }
};

module.exports = {
    getAllUser,
    getAnUser,
    updateStatusUser,
};
