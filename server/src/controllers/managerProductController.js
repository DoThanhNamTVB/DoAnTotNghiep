const managerProductService = require("../services/managerProductService");

const createProduct = async (req, res) => {
    const { categoryId, productName, price, discount, quantity, description } =
        req.body;

    try {
        if (
            !categoryId ||
            !productName ||
            !price ||
            !discount ||
            !quantity ||
            !description
        ) {
            return res.status(400).json({
                err: 1,
                msg: "Missing inputs !",
            });
        }
        const reponse = await managerProductService.createProductService(
            req.body
        );
        return res.status(200).json(reponse);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at create product controller : " + error,
        });
    }
};

const getAllProduct = async (req, res) => {
    try {
        const response = await managerProductService.getAllProductService();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getAllProduct controller : " + error,
        });
    }
};

const getAnProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await managerProductService.getAnProductService(id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getAnProduct controller : " + error,
        });
    }
};

const updateProduct = async (req, res) => {
    try {
        const {
            categoryId,
            productName,
            price,
            discount,
            quantity,
            description,
        } = req.body;
        if (
            !categoryId ||
            !productName ||
            !price ||
            !discount ||
            !quantity ||
            !description
        ) {
            return res.status(400).json({
                err: 1,
                msg: "Missing inputs !",
            });
        }
        const id = req.params.id;
        const response = await managerProductService.updateProductService(
            req.body,
            id
        );
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at updateProduct controller : " + error,
        });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await managerProductService.deleteProductService(id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at deleteAdminAccount controller : " + error,
        });
    }
};
module.exports = {
    createProduct,
    getAllProduct,
    getAnProduct,
    updateProduct,
    deleteProduct,
};
