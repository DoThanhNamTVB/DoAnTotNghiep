const { response } = require("express");
const db = require("../models/index");
const { Op, where } = require("sequelize");

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

// const createProductService = ({ colors, ...payload }) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const response = await db.Product.findOrCreate({
//                 where: { productName: payload.productName },
//                 defaults: { ...payload },
//             });

//             if (!response) {
//                 resolve({
//                     err: 2,
//                     msg: "Tên sản phẩm đã tồn tại !",
//                 });
//             } else {
//                 if (colors.length > 0) {
//                     colors.forEach(async (color) => {
//                         await db.Product_Color.create({
//                             productId: response.id,
//                             colorId: color.id,
//                             quantity: color.quantity,
//                             img: color.img,
//                             status: color.status,
//                         });
//                     });
//                 }
//             }
//             resolve({
//                 err: 0,
//                 msg: "Hoàn thành thêm sản phẩm",
//                 response,
//             });
//         } catch (error) {
//             reject(error);
//         }
//     });
// };

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

module.exports = {
    createProductService,
    getAllProductService,
    getAnProductService,
    updateProductService,
    deleteProductService,
    getProductByCategoryService,
};
