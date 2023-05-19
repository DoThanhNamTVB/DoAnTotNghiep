const managerProductService = require("../services/managerProductService");

const createProduct = async (req, res) => {
    const {
        categoryId,
        productName,
        price,
        discount,
        description,
        genderFor,
        origin,
    } = req.body;

    try {
        if (
            !categoryId ||
            !productName ||
            !price ||
            !discount ||
            !description ||
            !genderFor ||
            !origin
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
            description,
            genderFor,
            origin,
        } = req.body;
        if (
            !categoryId ||
            !productName ||
            !price ||
            !discount ||
            !description ||
            !genderFor ||
            !origin
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
        console.log(response);
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

const getProductHot = async (req, res) => {
    try {
        const response = await managerProductService.getProductHot();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getProductHot controller : " + error,
        });
    }
};

const getProductNew = async (req, res) => {
    try {
        const response = await managerProductService.getProductNew();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getProductNew controller : " + error,
        });
    }
};

const getProductSearch = async (req, res) => {
    try {
        const keySearch = req.params.keySearch;
        const response = await managerProductService.getProductSearch(
            keySearch
        );
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getProductSearch controller : " + error,
        });
    }
};

const getProductSimilar = async (req, res) => {
    try {
        const price = req.params.price;
        const response = await managerProductService.getProductSimilar(price);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getProductSimilar controller : " + error,
        });
    }
};

const getProductFilter = async (req, res) => {
    try {
        const response = await managerProductService.getProductFilter(
            req.query
        );
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getProductFilter controller : " + error,
        });
    }
};

module.exports = {
    createProduct,
    getAllProduct,
    getAnProduct,
    updateProduct,
    deleteProduct,
    getProductByCategory,
    getProductHot,
    getProductNew,
    getProductSearch,
    getProductSimilar,
    getProductFilter,
};
