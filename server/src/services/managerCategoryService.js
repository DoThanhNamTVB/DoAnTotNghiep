const db = require("../models/index");

//create an Category
const createCategoryService = (categoryName) => {
    return new Promise(async (resolve, reject) => {
        try {
            const count = await db.Category.count({
                where: { categoryName },
            });
            if (count > 0) {
                resolve({
                    err: 2,
                    msg: "Danh mục đã tồn tại",
                });
            } else {
                const response = await db.Category.create({
                    categoryName,
                });
                resolve({
                    err: 0,
                    msg: "create Category successfully",
                    response,
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};

//get all Category
const getAllCategoryService = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Category.findAll(
                { order: [["createdAt", "DESC"]] },
                { raw: true }
            );

            resolve({
                err: response ? 0 : 2,
                msg: response ? "SUCCESSFULL" : "Fail to get all Categorys",
                response,
            });
        } catch (error) {
            reject(error);
        }
    });
};

//get an Category
const getAnCategoryService = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Category.findOne({
                where: { id },
            });

            resolve({
                err: response ? 0 : 2,
                msg: response ? "SUCCESSFULL" : " Category not exits",
                response,
            });
        } catch (error) {
            reject(error);
        }
    });
};

//update an Category

const updateCategoryService = (categoryName, id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const count = await db.Category.findOne({
                where: { categoryName },
            });
            if (count > 0) {
                resolve({
                    err: 2,
                    msg: "Tên tác giả đã tồn tại",
                });
            } else {
                await db.Category.update(
                    { categoryName },
                    { where: { id: id } }
                );
                resolve({
                    err: 0,
                    msg: "Updated Category successfully!",
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};

const deleteCategoryService = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const reponse = await db.Category.destroy({
                where: { id: id },
            });

            resolve({
                err: reponse ? 0 : 2,
                msg: reponse
                    ? "DELETED Category"
                    : "No find Category to delete",
                reponse,
            });
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    createCategoryService,
    getAllCategoryService,
    getAnCategoryService,
    updateCategoryService,
    deleteCategoryService,
};
