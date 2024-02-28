const db = require('../models/index');

const updateSetting = async (payload, id) => {
    try {
        const response = await db.Setting.update(payload, {
            where: { id: id },
        });
        return {
            err: response ? 0 : 2,
            msg: response ? 'Updated info websites success' : 'Update fail !',
        };
    } catch (error) {
        throw new Error(error);
    }
};

const getSetting = async (id) => {
    try {
        const response = await db.Setting.findOne({ where: { id: id } });
        return {
            err: response ? 0 : 2,
            msg: response ? 'get info websites success' : 'get fail !',
            response,
        };
    } catch (error) {
        throw new Error(error);
    }
};

const getAllSetting = async () => {
    try {
        const response = await db.Setting.findAll();
        return {
            err: response ? 0 : 2,
            msg: response ? 'get all info websites success' : 'get fail !',
            response,
        };
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = { updateSetting, getSetting, getAllSetting };
