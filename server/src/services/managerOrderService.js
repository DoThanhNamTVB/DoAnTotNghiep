const db = require('../models/index');

//create an
const createOrder = async (payload) => {
    try {
        const response = await db.Order.create({
            userId: payload.userId,
            quantity: payload.quantity,
            total_Price: payload.total_Price,
            status: 'chua-xac-nhan',
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
        return {
            err: response ? 0 : 2,
            msg: response ? 'Đặt hàng thành công' : 'Đặt hàng thất bại',
            response,
        };
    } catch (error) {
        throw new Error(error);
    }
};

//getAllOrder
const getAllOrder = async () => {
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

//get all by status
const getOrderByStatus = async (statusOrder) => {
    try {
        const response = await db.Order.findAll(
            {
                where: { status: statusOrder },
                include: [{ model: db.User }, { model: db.Product }],
            },
            {
                order: [['updatedAt', 'DESC']],
            },
            { raw: true }
        );

        return {
            err: response ? 0 : 2,
            msg: response ? 'Lấy thành công' : 'Lấy thất bại',
            response,
        };
    } catch (error) {
        throw new Error(error);
    }
};

//get orderById
const getOrderById = async (orderId) => {
    try {
        const response = await db.Order.findOne(
            {
                where: { id: orderId },
                include: [
                    { model: db.User },
                    {
                        model: db.Product,
                        include: [{ model: db.Color }, { model: db.Category }],
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
            msg: response ? 'Lấy thành công' : 'Lấy thất bại',
            response,
        };
    } catch (error) {
        throw new Error(error);
    }
};

//get all order
const getOrderByUserStatus = async (userId, statusOrder) => {
    try {
        const response = await db.Order.findAll(
            {
                where: { userId: userId, status: statusOrder },
                include: [
                    { model: db.User },
                    {
                        model: db.Product,
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
            msg: response ? 'Lấy thành công' : 'Lấy thất bại',
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
                    { model: db.User, where: { id: userId } },
                    // {
                    //     model: db.Product,
                    //     include: [{ model: db.OrderDetail }],
                    //     order: [["updatedAt", "DESC"]],
                    // },
                ],
            },
            {
                order: [['updatedAt', 'DESC']],
            },
            { raw: true }
        );

        return {
            err: response ? 0 : 2,
            msg: response ? 'SUCCESSFULL' : 'Fail to get all order',
            response,
        };
    } catch (error) {
        throw new Error(error);
    }
};

//update status order

const updateStatusOrder = async (payload, orderId) => {
    try {
        await db.Order.update(
            { status: payload.status },
            {
                where: { id: orderId },
            }
        );
        return {
            err: 0,
            msg: 'Updated for order',
        };
    } catch (error) {
        throw new Error(error);
    }
};

//update order (user)
const updateOrderByUser = async (payload, orderId) => {
    try {
        await db.Order.update(
            {
                quantity: payload.quantity,
                total_Price: payload.total_Price,
                status: 'Chờ xác nhận',
                userName: payload.userName,
                email: payload.email,
                phone: payload.phone,
                address: payload.address,
                notes: payload.notes,
                payment: payload.payment,
            },
            { where: { id: orderId } }
        );
        return {
            err: 0,
            msg: 'Sửa order thành công',
        };
    } catch (error) {
        throw new Error(error);
    }
};

const cancelOrder = async (payload, orderId) => {
    try {
        const response = await db.Order.update(
            { reason: payload.reason, status: 'da-huy' },
            {
                where: { id: orderId },
            }
        );

        if (response) {
            payload?.product?.forEach(async (item) => {
                await db.Product_Color.increment(
                    { quantity: parseInt(item?.Order_Detail?.quantity) },
                    {
                        where: {
                            productId: item?.Order_Detail?.productId,
                            colorId: item?.Order_Detail?.color,
                        },
                    }
                );
            });
        }

        return {
            err: response ? 0 : 2,
            msg: response ? 'Hủy đơn hàng thành công' : 'Không tìm thấy sản phẩm để xóa',
            response,
        };
    } catch (error) {
        throw new Error(error);
    }
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
    cancelOrder,
};
