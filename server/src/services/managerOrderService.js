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
                status: "chua-xac-nhan",
                userName: payload.userName,
                email: payload.email,
                phone: payload.phone,
                address: payload.address,
                notes: payload.notes,
                payment: payload.payment,
            });
            if (response) {
                payload.products?.forEach(async (item) => {
                    await db.Order_Detail.create({
                        orderId: response.id,
                        productId: item.id,
                        quantity: item.Cart.quantity,
                        color: item.Cart.colorId,
                        price: item.price,
                        discount: item.discount,
                    });

                    //update quantity
                    const find = await db.Product_Color.findOne({
                        where: {
                            productId: item.id,
                            colorId: item.Cart.colorId,
                        },
                    });

                    await db.Product_Color.update(
                        { quantity: find?.quantity - item?.Cart.quantity },
                        {
                            where: {
                                productId: item.id,
                                colorId: item.Cart.colorId,
                            },
                        }
                    );
                });

                //delete cart
                await db.Cart.destroy({ where: { userId: payload.userId } });
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
//getAllOrder
const getAllOrder = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Order.findAll(
                {
                    include: [
                        { model: db.User },
                        {
                            model: db.Product,
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

//get all by status
const getOrderByStatus = (statusOrder) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Order.findAll(
                {
                    where: { status: statusOrder },
                    include: [{ model: db.User }],
                },
                {
                    order: [["updatedAt", "DESC"]],
                },
                { raw: true }
            );

            resolve({
                err: response ? 0 : 2,
                msg: response ? "Lấy thành công" : "Lấy thất bại",
                response,
            });
        } catch (error) {
            reject(error);
        }
    });
};

//get orderById
const getOrderById = (orderId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Order.findOne(
                {
                    where: { id: orderId },
                    include: [{ model: db.User }, { model: db.Product }],
                },
                {
                    order: [["updatedAt", "DESC"]],
                },
                { raw: true }
            );

            resolve({
                err: response ? 0 : 2,
                msg: response ? "Lấy thành công" : "Lấy thất bại",
                response,
            });
        } catch (error) {
            reject(error);
        }
    });
};

//get all order
const getOrderByUserStatus = (userId, statusOrder) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Order.findAll(
                {
                    where: { userId: userId, status: statusOrder },
                    include: [
                        { model: db.User },
                        // {
                        //     model: db.Product,
                        //     include: [{ model: db.OrderDetail }],
                        //     order: [["updatedAt", "DESC"]],
                        // },
                    ],
                },
                {
                    order: [["updatedAt", "DESC"]],
                },
                { raw: true }
            );

            resolve({
                err: response ? 0 : 2,
                msg: response ? "Lấy thành công" : "Lấy thất bại",
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
                        { model: db.User, where: { id: userId } },
                        // {
                        //     model: db.Product,
                        //     include: [{ model: db.OrderDetail }],
                        //     order: [["updatedAt", "DESC"]],
                        // },
                    ],
                },
                {
                    order: [["updatedAt", "DESC"]],
                },
                { raw: true }
            );

            resolve({
                err: response ? 0 : 2,
                msg: response ? "SUCCESSFULL" : "Fail to get all order",
                response,
            });
        } catch (error) {
            reject(error);
        }
    });
};

//update status order

const updateStatusOrder = (orderId) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Order.update(
                { status: "da-xac-nhan" },
                {
                    where: { id: orderId },
                }
            );
            resolve({
                err: 0,
                msg: "Updated for order",
            });
        } catch (error) {
            reject(error);
        }
    });
};

//update order (user)
const updateOrderByUser = (payload, orderId) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Order.update(
                {
                    quantity: payload.quantity,
                    total_Price: payload.total_Price,
                    status: "Chờ xác nhận",
                    userName: payload.userName,
                    email: payload.email,
                    phone: payload.phone,
                    address: payload.address,
                    notes: payload.notes,
                    payment: payload.payment,
                },
                { where: { id: orderId } }
            );
            resolve({
                err: 0,
                msg: "Sửa order thành công",
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
    getAllOrder,
    getOrderByStatus,
    getOrderById,
    getOrderByUserId,
    getOrderByUserStatus,
    updateStatusOrder,
    updateOrderByUser,
    deleteOrder,
};
