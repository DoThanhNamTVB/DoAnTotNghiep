const db = require('../models/index');

//create an
const createProductFavouriteService = async (payload) => {
    try {
        const count = await db.Product_Favourite.count({
            where: { productId: payload.productId, userId: payload.userId },
        });

        if (count > 0) {
            return {
                err: 2,
                msg: 'Sản phẩm đã tồn tại',
            };
        } else {
            const response = await db.Product_Favourite.create(payload);
            return {
                err: 0,
                msg: 'Thêm sản phẩm yêu thích thành công',
                response,
            };
        }
    } catch (error) {
        throw new Error(error);
    }
};

//get all Color
const getAllProductFavouriteService = async (userId) => {
    try {
        const response = await db.Product_Favourite.findAll(
            {
                where: { userId: userId },
                order: [['updatedAt', 'DESC']],
            },
            { raw: true }
        );

        return {
            err: response ? 0 : 2,
            msg: response ? 'SUCCESSFULL' : 'Fail to get all Product_Favourite',
            response,
        };
    } catch (error) {
        throw new Error(error);
    }
};

const deleteProductFavouriteService = async (payload) => {
    try {
        const reponse = await db.Product_Favourite.destroy({
            where: { userId: payload.userId, productId: payload.productId },
        });

        return {
            err: reponse ? 0 : 2,
            msg: reponse ? 'DELETED' : 'No find prduct to delete',
            reponse,
        };
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = {
    createProductFavouriteService,
    getAllProductFavouriteService,
    deleteProductFavouriteService,
};
