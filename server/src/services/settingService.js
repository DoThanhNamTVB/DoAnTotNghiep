const db = require("../models/index");

const updateSetting = (payload, id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Setting.update(payload, {
                where: { id: id },
            });
            resolve({
                err: response ? 0 : 2,
                msg: response
                    ? "Updated info websites success"
                    : "Update fail !",
            });
        } catch (error) {
            reject(error);
        }
    });
};

const getSetting = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Setting.findOne({ where: { id: id } });
            resolve({
                err: response ? 0 : 2,
                msg: response ? "get info websites success" : "get fail !",
                response,
            });
        } catch (error) {
            reject(error);
        }
    });
};

const getAllSetting = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Setting.findAll();
            resolve({
                err: response ? 0 : 2,
                msg: response ? "get all info websites success" : "get fail !",
                response,
            });
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = { updateSetting, getSetting, getAllSetting };
