const db = require('../models/index');

//create an
const createOrderDetail = async (payload) => {
    try {
        const response = await db.Order_Detail.create(payload);
        return {
            err: response ? 0 : 2,
            msg: response ? 'Thêm thành công' : 'Thêm thất bại thất bại',
            response,
        };
    } catch (error) {
        throw new Error(error);
    }
};

//get all order

const getOrderByUserStatus = async (userId, status) => {
    try {
        const response = await db.Order.findAll(
            {
                where: { userId: userId, status: status },
                include: [
                    { model: db.User },
                    {
                        model: db.Product,
                        include: [{ model: db.OrderDetail }],
                        order: [['updatedAt', 'DESC']],
                    },
                ],
            },
            {
                order: [['updatedAt', 'DESC']],
            },
            { raw: true }
        );

        return {
            err: response ? 0 : 2,
            msg: response ? 'Lấy thành công' : 'Chưa có đơn hàng nào',
            response,
        };
    } catch (error) {
        throw new Error(error);
    }
};

//get all order by userId
const getOrderByUserId = async (userId) => {
    try {
        const response = await db.Order.findAll(
            {
                where: { userId: userId },
                include: [
                    { model: db.User },
                    {
                        model: db.Product,
                        include: [{ model: db.OrderDetail }],
                        order: [['updatedAt', 'DESC']],
                    },
                ],
            },
            {
                order: [['updatedAt', 'DESC']],
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

//update status order

const updateStatusOrder = async ({ status }, orderId) => {
    try {
        await db.Order.update(
            { status: status },
            {
                where: { id: orderId },
            }
        );
        return {
            err: 0,
            msg: 'Updated for Cart',
        };
    } catch (error) {
        throw new Error(error);
    }
};

const cancelOrder = async (reason, orderId) => {
    try {
        const response = await db.Order.update(
            { reason: reason, status: 'da-huy' },
            {
                where: { id: orderId },
            }
        );

        // if (response) {
        //     await db.OrderDetail.destroy({
        //         where: { orderId: orderId },
        //     });
        // }

        return {
            err: response ? 0 : 2,
            msg: response ? 'hủy đơn hàng thành công' : 'Không tìm thấy sản phẩm để xóa',
            response,
        };
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = {
    createOrderDetail,
    getOrderByUserId,
    getOrderByUserStatus,
    updateStatusOrder,
    cancelOrder,
};
