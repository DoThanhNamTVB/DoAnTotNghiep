const managerCartService = require('../services/managerCartService');

const createCartController = async (req, res) => {
    try {
        const userId = req.params.userId;
        const { productId, colorId, quantity } = req.body;
        if (!productId || !colorId || !quantity) {
            return res.status(400).json({
                err: 1,
                msg: 'Missing inputs !',
            });
        }
        const response = await managerCartService.createCartService(req.body, userId);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({
            err: -1,
            msg: 'Fail at getAllCartController : ' + error,
        });
    }
};

const getCartByUserIdController = async (req, res) => {
    try {
        const userId = req.params.userId;
        const response = await managerCartService.getCartByUserIdService(userId);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({
            err: -1,
            msg: 'Fail at getAllCartController : ' + error,
        });
    }
};

const updateCartController = async (req, res) => {
    try {
        const { userId, productId } = req.params;
        const response = await managerCartService.updateCartService(req.body, userId, productId);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({
            err: -1,
            msg: 'Fail at getAnCartController : ' + error,
        });
    }
};

const deleteCartController = async (req, res) => {
    try {
        const { userId, productId } = req.params;
        const response = await managerCartService.deleteCartService(userId, productId);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({
            err: -1,
            msg: 'Fail at getAnCartController : ' + error,
        });
    }
};

module.exports = {
    createCartController,
    getCartByUserIdController,
    updateCartController,
    deleteCartController,
};
