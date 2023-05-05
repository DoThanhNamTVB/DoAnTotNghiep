const db = require("../models/index");
const { Op } = require("sequelize");

//create an
const createOrder = (payload) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Order.create({
                userId: payload.userId,
                quantity: payload.quantity,
                total_Price: payload.total_Price,
                status: "Chờ xác nhận",
                userName: payload.userName,
                email: payload.email,
                phone: payload.phone,
                address: payload.address,
                notes: payload.notes,
                payment: payload.payment,
            });
            if (response) {
                payload.product?.forEach(async (item) => {
                    await db.Order_Detail.create({
                        orderId: response.id,
                        productId: item.productId,
                        quantity: item.quantity,
                        color: item,
                    });
                });
            }
            resolve({
                err: response ? 0 : 2,
                msg: response ? "Đặt hàng thành công" : "Đặt hàng thất bại",
                response,
            });
        } catch (error) {
            reject(error);
        }
    });
};

//get all order
const getOrderByUserStatus = (userId, status) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Order.findAll(
                {
                    where: { userId: userId, status: status },
                    include: [
                        { model: db.User },
                        {
                            model: db.Product,
                            include: [{ model: db.OrderDetail }],
                            order: [["updatedAt", "DESC"]],
                        },
                    ],
                },
                {
                    order: [["updatedAt", "DESC"]],
                },
                { raw: true }
            );

            resolve({
                err: response ? 0 : 2,
                msg: response ? "Lấy thành công" : "Chưa có đơn hàng nào",
                response,
            });
        } catch (error) {
            reject(error);
        }
    });
};

//get all order by userId
const getOrderByUserId = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Order.findAll(
                {
                    where: { userId: userId },
                    include: [
                        { model: db.User },
                        {
                            model: db.Product,
                            include: [{ model: db.OrderDetail }],
                            order: [["updatedAt", "DESC"]],
                        },
                    ],
                },
                {
                    order: [["updatedAt", "DESC"]],
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

//update status order

const updateStatusOrder = ({ status }, orderId) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Order.update(
                { status: status },
                {
                    where: { id: orderId },
                }
            );
            resolve({
                err: 0,
                msg: "Updated for Cart",
            });
        } catch (error) {
            reject(error);
        }
    });
};

const deleteOrder = (orderId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Order.destroy({
                where: { id: orderId },
            });

            if (response) {
                await db.OrderDetail.destroy({
                    where: { orderId: orderId },
                });
            }

            resolve({
                err: response ? 0 : 2,
                msg: response
                    ? "Xóa đơn hàng thành công"
                    : "Không tìm thấy sản phẩm để xóa",
                rseponse,
            });
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    createOrder,
    getOrderByUserId,
    getOrderByUserStatus,
    updateStatusOrder,
    deleteOrder,
};
