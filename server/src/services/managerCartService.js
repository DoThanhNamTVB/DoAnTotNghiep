const db = require('../models/index');

//create an
const createCartService = async (payload, userId) => {
    {
        try {
            const find = await db.Cart.findOne({
                where: { userId: userId, productId: payload.productId },
            });
            if (find) {
                return {
                    err: 2,
                    msg: 'Sản phẩm đã có trong giỏ hàng',
                };
            } else {
                const response = await db.Cart.create(payload);
                return {
                    err: 0,
                    msg: 'Thêm vào giỏ hàng thành công',
                    response,
                };
            }
        } catch (error) {
            throw new Error(error);
        }
    }
};

//get all cart
const getCartByUserIdService = async (userId) => {
    try {
        const response = await db.Cart.findAll(
            {
                where: { userId: userId },
            },
            {
                order: [['createdAt', 'DESC']],
            },
            { raw: true }
        );

        return {
            err: response ? 0 : 2,
            msg: response ? 'SUCCESSFULL' : 'Fail to get all Carts',
            response,
        };
    } catch (error) {
        throw new Error(error);
    }
};

//update an cart

const updateCartService = async (payload, userId, productId) => {
    try {
        await db.Cart.update(payload, {
            where: { userId: userId, productId: productId },
        });
        return {
            err: 0,
            msg: 'Updated for Cart',
        };
    } catch (error) {
        throw new Error(error);
    }
};

const deleteCartService = async (userId, productId) => {
    try {
        const reponse = await db.Cart.destroy({
            where: { userId: userId, productId: productId },
        });

        return {
            err: reponse ? 0 : 2,
            msg: reponse ? 'Xóa sản phẩm khỏi giỏ hàng thành công' : 'Không tìm thấy sản phẩm để xóa',
            reponse,
        };
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = {
    createCartService,
    getCartByUserIdService,
    updateCartService,
    deleteCartService,
};
