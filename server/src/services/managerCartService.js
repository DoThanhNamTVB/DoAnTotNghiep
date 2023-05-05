const db = require("../models/index");
const { Op } = require("sequelize");

//create an
const createCartService = (payload, userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const find = await db.Cart.findOne({
                where: { userId: userId, productId: payload.productId },
            });
            if (find) {
                resolve({
                    err: 2,
                    msg: "Sản phẩm đã có trong giỏ hàng",
                });
            } else {
                const response = await db.Cart.create(payload);
                resolve({
                    err: 0,
                    msg: "Thêm vào giỏ hàng thành công",
                    response,
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};

//get all cart
const getCartByUserIdService = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Cart.findAll(
                {
                    where: { userId: userId },
                },
                {
                    order: [["createdAt", "DESC"]],
                },
                { raw: true }
            );

            resolve({
                err: response ? 0 : 2,
                msg: response ? "SUCCESSFULL" : "Fail to get all Carts",
                response,
            });
        } catch (error) {
            reject(error);
        }
    });
};

//update an cart

const updateCartService = (payload, userId, productId) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Cart.update(payload, {
                where: { userId: userId, productId: productId },
            });
            resolve({
                err: 0,
                msg: "Updated for Cart",
            });
        } catch (error) {
            reject(error);
        }
    });
};

const deleteCartService = (userId, productId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const reponse = await db.Cart.destroy({
                where: { userId: userId, productId: productId },
            });

            resolve({
                err: reponse ? 0 : 2,
                msg: reponse
                    ? "Xóa sản phẩm khỏi giỏ hàng thành công"
                    : "Không tìm thấy sản phẩm để xóa",
                reponse,
            });
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    createCartService,
    getCartByUserIdService,
    updateCartService,
    deleteCartService,
};
