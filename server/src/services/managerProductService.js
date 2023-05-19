const { response } = require("express");
const db = require("../models/index");
const { Op } = require("sequelize");

//create an
const createProductService = ({
    categoryId,
    productName,
    price,
    discount,
    description,
    genderFor,
    productType,
    glassSurface,
    shellMaterial,
    wireMaterial,
    waterproofDeft,
    shape,
    dimension,
    thichness,
    sizeWire,
    origin,
}) => {
    return new Promise(async (resolve, reject) => {
        try {
            const countName = await db.Product.count(
                {
                    where: { productName },
                }
                // {
                //     include: db.Product_Color
                // }
            );

            if (countName > 0) {
                resolve({
                    err: 2,
                    msg: "Tên sản phẩm đã tồn tại",
                });
            } else {
                const response = await db.Product.create({
                    categoryId,
                    productName,
                    price,
                    discount,
                    description,
                    genderFor,
                    productType,
                    glassSurface,
                    shellMaterial,
                    wireMaterial,
                    waterproofDeft,
                    shape,
                    dimension,
                    thichness,
                    sizeWire,
                    origin,
                });
                resolve({
                    err: 0,
                    msg: "Tạo tài khoản thành công",
                    response,
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};

//get all product
const getAllProductService = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Product.findAll(
                {
                    order: [["createdAt", "DESC"]],
                    include: [
                        { model: db.Category },
                        { model: db.Color, order: [["quantity", "DESC"]] },
                    ],
                },
                { raw: true },
                { nest: true }
            );

            resolve({
                err: response ? 0 : 2,
                msg: response ? "SUCCESSFULL" : "Fail to get all products",
                response,
            });
        } catch (error) {
            reject(error);
        }
    });
};

//get an product
const getAnProductService = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Product.findOne({
                where: { id },
                include: [{ model: db.Category }, { model: db.Color }],
            });

            resolve({
                err: response ? 0 : 2,
                msg: response ? "SUCCESSFULL" : "Product is not exits",
                response,
            });
        } catch (error) {
            reject(error);
        }
    });
};

//get product hot

const getProductHot = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const datenow = new Date();
            const dateLastWeek = new Date(
                datenow.getFullYear(),
                datenow.getMonth(),
                datenow.getDate() - 7
            );
            const response = await db.Product.findAll({
                include: [
                    { model: db.Color },
                    {
                        model: db.Order,
                        where: {
                            status: "da-giao",
                            updatedAt: {
                                [Op.lte]: datenow,
                                [Op.gte]: dateLastWeek,
                            },
                        },
                    },
                ],
                limit: 6,
            });
            resolve({
                err: response ? 0 : 2,
                msg: response ? "SUCCESSFULL" : "Fail to get product hot",
                response,
            });
        } catch (error) {
            reject(error);
        }
    });
};

//get product new

const getProductNew = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Product.findAll({
                order: [["createdAt", "DESC"]],
                include: [{ model: db.Category }, { model: db.Color }],
                limit: 6,
            });

            resolve({
                err: response ? 0 : 2,
                msg: response ? "SUCCESSFULL" : "Fail to get product new",
                response,
            });
        } catch (error) {
            reject(error);
        }
    });
};

//update an product

const updateProductService = (product, id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const findName = await db.Product.count({
                where: {
                    id: { [Op.ne]: id },
                    productName: product.productName,
                },
            });
            if (findName > 0) {
                resolve({
                    err: 2,
                    msg: "Tên sản phẩm đã tồn tại !",
                });
            } else {
                await db.Product.update(product, {
                    where: { id: id },
                });

                resolve({
                    err: 0,
                    msg: "Updated for product",
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};

const deleteProductService = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const reponse = await db.Product.destroy({
                where: { id: id },
            });

            if (response) {
                await db.Product_Color.destroy({
                    where: { productId: id },
                });
            }

            resolve({
                err: reponse ? 0 : 2,
                msg: reponse ? "DELETED" : "No find product to delete",
                reponse,
            });
        } catch (error) {
            reject(error);
        }
    });
};

const getProductByCategoryService = (categorySlug) => {
    return new Promise(async (resolve, reject) => {
        try {
            const find = await db.Category.findOne({
                where: { slug: categorySlug },
            });

            if (!find) {
                resolve({
                    err: 2,
                    msg: "Không có danh mục này",
                });
            } else {
                const response = await db.Product.findAll({
                    where: { categoryId: find.id },
                    order: [["updatedAt", "DESC"]],
                    include: [{ model: db.Category }, { model: db.Color }],
                });
                resolve({
                    err: response ? 0 : 2,
                    msg: response ? "Hoàn thành " : "Không có danh mục này",
                    response,
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};

const getProductSearch = (keySearch) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Product.findAll({
                where: {
                    [Op.or]: [
                        {
                            productName: {
                                [Op.like]: "%" + keySearch + "%",
                            },
                        },
                    ],
                },
                limit: 10,
                include: [{ model: db.Category }, { model: db.Color }],
                order: [["updatedAt", "DESC"]],
            });

            if (!keySearch) {
                resolve({
                    err: 0,
                    msg: "Lấy thành công ! ",
                    response: [],
                });
            } else {
                resolve({
                    err: 0,
                    msg: "Lấy thành công ! ",
                    response,
                });
            }
            // resolve({
            //     err: 0,
            //     msg: "Lấy thành công ! ",
            //     response,
            // });
        } catch (error) {
            reject(error);
        }
    });
};

const getProductSimilar = (price) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Product.findAll({
                where: {
                    price: {
                        [Op.gte]: Number(price) - 2000000,
                        [Op.lte]: Number(price) + 2000000,
                    },
                },
                limit: 6,
                include: [{ model: db.Category }, { model: db.Color }],
                order: [["updatedAt", "DESC"]],
            });
            resolve({
                err: response ? 0 : 2,
                msg: response ? "Lấy thành công ! " : "Lấy thát bại",
                response,
            });
        } catch (error) {
            reject(error);
        }
    });
};

const getProductFilter = (payload) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = {};
            if (payload?.categoryId) {
                data.where = {
                    ...data.where,
                    categoryId: payload?.categoryId,
                };
            }
            if (payload?.price) {
                const arr = payload?.price.split(",");
                data.where = {
                    ...data.where,
                    price: { [Op.between]: [+arr[0], +arr[1]] },
                };
            }
            if (payload?.gender) {
                data.where = {
                    ...data.where,
                    genderFor: payload?.gender,
                };
            }
            if (payload?.discount) {
                const arr = payload?.discount.split(",");
                data.where = {
                    ...data.where,
                    discount: { [Op.between]: [+arr[0], +arr[1]] },
                };
            }
            const response = await db.Product.findAll(
                {
                    order: [["createdAt", "DESC"]],
                    include: [
                        { model: db.Category },
                        { model: db.Color, order: [["quantity", "DESC"]] },
                    ],
                    ...data,
                },
                { raw: true },
                { nest: true }
            );

            resolve({
                err: response ? 0 : 2,
                msg: response ? "SUCCESSFULL" : "Fail to get all products",
                response,
            });
        } catch (error) {
            reject(error);
        }
    });
};
module.exports = {
    createProductService,
    getAllProductService,
    getAnProductService,
    updateProductService,
    deleteProductService,
    getProductByCategoryService,
    getProductHot,
    getProductNew,
    getProductSearch,
    getProductSimilar,
    getProductFilter,
};
