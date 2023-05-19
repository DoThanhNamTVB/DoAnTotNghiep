const db = require("../models/index");
const { Op } = require("sequelize");

//create an
const createProductFavouriteService = (payload) => {
    return new Promise(async (resolve, reject) => {
        try {
            const count = await db.Product_Favourite.count({
                where: { productId: payload.productId, userId: payload.userId },
            });

            if (count > 0) {
                resolve({
                    err: 2,
                    msg: "Sản phẩm đã tồn tại",
                });
            } else {
                const response = await db.Product_Favourite.create(payload);
                resolve({
                    err: 0,
                    msg: "Thêm sản phẩm yêu thích thành công",
                    response,
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};

//get all Color
const getAllProductFavouriteService = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Product_Favourite.findAll(
                {
                    where: { userId: userId },
                    order: [["updatedAt", "DESC"]],
                },
                { raw: true }
            );

            resolve({
                err: response ? 0 : 2,
                msg: response
                    ? "SUCCESSFULL"
                    : "Fail to get all Product_Favourite",
                response,
            });
        } catch (error) {
            reject(error);
        }
    });
};

const deleteProductFavouriteService = (payload) => {
    return new Promise(async (resolve, reject) => {
        try {
            const reponse = await db.Product_Favourite.destroy({
                where: { userId: payload.userId, productId: payload.productId },
            });

            resolve({
                err: reponse ? 0 : 2,
                msg: reponse ? "DELETED" : "No find prduct to delete",
                reponse,
            });
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    createProductFavouriteService,
    getAllProductFavouriteService,
    deleteProductFavouriteService,
};
