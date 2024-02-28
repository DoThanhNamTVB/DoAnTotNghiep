const managerColorService = require('../services/managerColorservice');

const createColor = async (req, res) => {
    const { colorName, description } = req.body;

    try {
        if (!colorName || !description) {
            return res.status(400).json({
                err: 1,
                msg: 'Missing inputs !',
            });
        }
        const reponse = await managerColorService.createColorService(req.body);
        return res.status(200).json(reponse);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at create Color controller : ' + error,
        });
    }
};

const getAllColor = async (req, res) => {
    try {
        const response = await managerColorService.getAllColorService();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at getAllColor controller : ' + error,
        });
    }
};

const getAnColor = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await managerColorService.getAnColorService(id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at getAnColor controller : ' + error,
        });
    }
};

const updateColor = async (req, res) => {
    try {
        const { colorName, description } = req.body;
        if (!colorName || !description) {
            return res.status(400).json({
                err: 1,
                msg: 'Missing inputs !',
            });
        }
        const id = req.params.id;
        const response = await managerColorService.updateColorService(req.body, id);
        // console.log(response);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at updateColor controller : ' + error,
        });
    }
};

const deleteColor = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await managerColorService.deleteColorService(id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at deleteAdminAccount controller : ' + error,
        });
    }
};
module.exports = {
    createColor,
    getAllColor,
    getAnColor,
    updateColor,
    deleteColor,
};
