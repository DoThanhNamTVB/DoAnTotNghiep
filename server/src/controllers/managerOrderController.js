const managerOrderService = require("../services/managerOrderService");

const createOrder = async (req, res) => {
    const {
        userId,
        quantity,
        total_Price,
        userName,
        email,
        phone,
        address,
        payment,
    } = req.body;

    try {
        if (
            !userId ||
            !quantity ||
            !total_Price ||
            !userName ||
            !email ||
            !phone ||
            !address ||
            !payment
        ) {
            return res.status(400).json({
                err: 1,
                msg: "Missing inputs !",
            });
        }
        const reponse = await managerOrderService.createOrder(req.body);
        return res.status(200).json(reponse);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at create order controller : " + error,
        });
    }
};

const getAllOrder = async (req, res) => {
    try {
        const response = await managerOrderService.getAllOrder();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getallOrder controller : " + error,
        });
    }
};

const getOrderByStatus = async (req, res) => {
    try {
        const statusOrder = req.params.statusOrder;
        const response = await managerOrderService.getOrderByStatus(
            statusOrder
        );
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getOrderByStatus controller : " + error,
        });
    }
};

const getOrderById = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const response = await managerOrderService.getOrderById(orderId);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getOrderByStatus controller : " + error,
        });
    }
};

const getOrderByUserStatus = async (req, res) => {
    try {
        const { userId, statusOrder } = req.params;
        const response = await managerOrderService.getOrderByUserStatus(
            userId,
            statusOrder
        );
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getOrderByUserStatus controller : " + error,
        });
    }
};

const getOrderByUserId = async (req, res) => {
    try {
        const userId = req.params.userId;
        const response = await managerOrderService.getOrderByUserId(userId);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getOrderByUserId controller : " + error,
        });
    }
};

const updateStatusOrder = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const response = await managerOrderService.updateStatusOrder(orderId);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at updateStatusOrder controller : " + error,
        });
    }
};

const updateOrderByUser = async (req, res) => {
    const { quantity, total_Price, userName, email, phone, addres, payment } =
        req.body;

    try {
        if (
            !quantity ||
            !total_Price ||
            !userName ||
            !email ||
            !phone ||
            !addres ||
            !payment
        ) {
            return res.status(400).json({
                err: 1,
                msg: "Missing inputs !",
            });
        }
        const orderId = req.params.orderId;
        const reponse = await managerOrderService.updateOrderByUser(
            req.body,
            orderId
        );
        return res.status(200).json(reponse);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at updateOrderByUser controller : " + error,
        });
    }
};

const deleteOrder = async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const response = await managerOrderService.deleteOrder(orderId);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at deleteOrder controller : " + error,
        });
    }
};

const getProductByCategory = async (req, res) => {
    try {
        const categorySlug = req.params.categorySlug;
        const response =
            await managerProductService.getProductByCategoryService(
                categorySlug
            );
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at  getProductByCategory controller : " + error,
        });
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
    deleteOrder,
};
