const db = require("../models/index");

//create an
const createProductService = ({
    categoryId,
    productName,
    price,
    discount,
    quantity,
    description,
    genderFor,
    productType,
    glassSurface,
    shellMaterial,
    wireMaterial,
    waterproofDeft,
    color,
    shape,
    dimension,
    thichness,
    sizeWire,
    origin,
}) => {
    return new Promise(async (resolve, reject) => {
        try {
            const countName = await db.Product.count({
                where: { productName },
            });

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
                    quantity,
                    description,
                    genderFor,
                    productType,
                    glassSurface,
                    shellMaterial,
                    wireMaterial,
                    waterproofDeft,
                    color,
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
                { order: [["createdAt", "DESC"]] },
                { raw: true }
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
            await db.Product.update(product, {
                where: { id: id },
            });

            resolve({
                err: 0,
                msg: "Updated for product",
            });
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

module.exports = {
    createProductService,
    getAllProductService,
    getAnProductService,
    updateProductService,
    deleteProductService,
};
