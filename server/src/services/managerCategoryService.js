const { Op } = require('sequelize');
const db = require('../models/index');

//create an Category
const createCategoryService = async (payload) => {
    try {
        const count = await db.Category.count({
            where: { slug: payload.slug },
        });
        if (count > 0) {
            return {
                err: 2,
                msg: 'Danh mục đã tồn tại',
            };
        } else {
            const response = await db.Category.create(payload);
            return {
                err: 0,
                msg: 'create Category successfully',
                response,
            };
        }
    } catch (error) {
        throw new Error(error);
    }
};

//get all Category
const getAllCategoryService = async () => {
    try {
        const response = await db.Category.findAll({ order: [['createdAt', 'DESC']] }, { raw: true });

        return {
            err: response ? 0 : 2,
            msg: response ? 'SUCCESSFULL' : 'Fail to get all Categorys',
            response,
        };
    } catch (error) {
        throw new Error(error);
    }
};

//get an Category
const getAnCategoryService = async (id) => {
    try {
        const response = await db.Category.findOne({
            where: { id },
        });

        return {
            err: response ? 0 : 2,
            msg: response ? 'SUCCESSFULL' : ' Category not exits',
            response,
        };
    } catch (error) {
        throw new Error(error);
    }
};

//update an Category

const updateCategoryService = async (payload, id) => {
    try {
        const count = await db.Category.count({
            where: {
                id: { [Op.ne]: id },
                categoryName: payload.categoryName,
            },
        });
        if (count > 0) {
            return {
                err: 2,
                msg: 'Tên danh mục đã tồn tại',
            };
        } else {
            await db.Category.update(payload, { where: { id: id } });
            return {
                err: 0,
                msg: 'Updated Category successfully!',
            };
        }
    } catch (error) {
        throw new Error(error);
    }
};

const deleteCategoryService = async (id) => {
    try {
        const reponse = await db.Category.destroy({
            where: { id: id },
        });

        return {
            err: reponse ? 0 : 2,
            msg: reponse ? 'DELETED Category' : 'No find Category to delete',
            reponse,
        };
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = {
    createCategoryService,
    getAllCategoryService,
    getAnCategoryService,
    updateCategoryService,
    deleteCategoryService,
};
