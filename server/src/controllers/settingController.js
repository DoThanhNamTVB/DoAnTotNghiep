const settingService = require('../services/settingService');

const updateSetting = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await settingService.updateSetting(req.body, id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at settingService Controller : ' + error,
        });
    }
};

const getSetting = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await settingService.getSetting(id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at getsetting Controller : ' + error,
        });
    }
};

const getAllSetting = async (req, res) => {
    try {
        const response = await settingService.getAllSetting();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at getAllsetting Controller : ' + error,
        });
    }
};

module.exports = { updateSetting, getSetting, getAllSetting };
