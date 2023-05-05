const db = require("../models/index");
const { Op } = require("sequelize");

//create an
const createColorService = (payload) => {
    return new Promise(async (resolve, reject) => {
        try {
            const countName = await db.Color.count({
                where: { slug: payload.slug },
            });

            if (countName > 0) {
                resolve({
                    err: 2,
                    msg: "Màu này đã tồn tại",
                });
            } else {
                const response = await db.Color.create(payload);
                resolve({
                    err: 0,
                    msg: "Tạo màu thành công",
                    response,
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};

//get all Color
const getAllColorService = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Color.findAll(
                {
                    order: [["createdAt", "DESC"]],
                },
                { raw: true }
            );

            resolve({
                err: response ? 0 : 2,
                msg: response ? "SUCCESSFULL" : "Fail to get all Colors",
                response,
            });
        } catch (error) {
            reject(error);
        }
    });
};

//get an Color
const getAnColorService = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Color.findOne({
                where: { id },
            });

            resolve({
                err: response ? 0 : 2,
                msg: response ? "SUCCESSFULL" : "Color is not exits",
                response,
            });
        } catch (error) {
            reject(error);
        }
    });
};

//update an Color

const updateColorService = (color, id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const findName = await db.Color.count({
                where: {
                    id: { [Op.ne]: id },
                    colorName: color.colorName,
                },
            });
            if (findName > 0) {
                resolve({
                    err: 2,
                    msg: "Tên màu đã tồn tại !",
                });
            } else {
                await db.Color.update(color, {
                    where: { id: id },
                });

                resolve({
                    err: 0,
                    msg: "Updated for Color",
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};

const deleteColorService = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const reponse = await db.Color.destroy({
                where: { id: id },
            });

            resolve({
                err: reponse ? 0 : 2,
                msg: reponse ? "DELETED" : "No find Color to delete",
                reponse,
            });
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    createColorService,
    getAllColorService,
    getAnColorService,
    updateColorService,
    deleteColorService,
};
