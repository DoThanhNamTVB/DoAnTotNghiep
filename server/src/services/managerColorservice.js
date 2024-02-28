const db = require('../models/index');
const { Op } = require('sequelize');

//create an
const createColorService = async (payload) => {
    try {
        const countName = await db.Color.count({
            where: { slug: payload.slug },
        });

        if (countName > 0) {
            return {
                err: 2,
                msg: 'Màu này đã tồn tại',
            };
        } else {
            const response = await db.Color.create(payload);
            return {
                err: 0,
                msg: 'Tạo màu thành công',
                response,
            };
        }
    } catch (error) {
        throw new Error(error);
    }
};

//get all Color
const getAllColorService = async () => {
    try {
        const response = await db.Color.findAll(
            {
                order: [['createdAt', 'DESC']],
            },
            { raw: true }
        );

        return {
            err: response ? 0 : 2,
            msg: response ? 'SUCCESSFULL' : 'Fail to get all Colors',
            response,
        };
    } catch (error) {
        throw new Error(error);
    }
};

//get an Color
const getAnColorService = async (id) => {
    try {
        const response = await db.Color.findOne({
            where: { id },
        });

        return {
            err: response ? 0 : 2,
            msg: response ? 'SUCCESSFULL' : 'Color is not exits',
            response,
        };
    } catch (error) {
        throw new Error(error);
    }
};

//update an Color

const updateColorService = async (color, id) => {
    try {
        const findName = await db.Color.count({
            where: {
                id: { [Op.ne]: id },
                colorName: color.colorName,
            },
        });
        if (findName > 0) {
            return {
                err: 2,
                msg: 'Tên màu đã tồn tại !',
            };
        } else {
            await db.Color.update(color, {
                where: { id: id },
            });

            return {
                err: 0,
                msg: 'Updated for Color',
            };
        }
    } catch (error) {
        throw new Error(error);
    }
};

const deleteColorService = async (id) => {
    try {
        const find = await db.Product_Color.count({
            where: { colorId: id },
        });
        if (find > 0) {
            return {
                err: 2,
                msg: 'Now color has many product delete',
            };
        } else {
            const response = await db.Color.destroy({
                where: { id: id },
            });

            return {
                err: 0,
                msg: 'DELETED',
                response,
            };
        }
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = {
    createColorService,
    getAllColorService,
    getAnColorService,
    updateColorService,
    deleteColorService,
};
