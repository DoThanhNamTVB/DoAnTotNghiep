const managerCategoryService = require("../services/managerCategoryService");

const createCategory = async (req, res) => {
    const { categoryName } = req.body;

    try {
        if (!categoryName) {
            return res.status(400).json({
                err: 1,
                msg: "Missing inputs !",
            });
        }
        const reponse = await managerCategoryService.createCategoryService(
            categoryName
        );
        return res.status(200).json(reponse);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at Category  controller : " + error,
        });
    }
};

const getAllCategory = async (req, res) => {
    try {
        const response = await managerCategoryService.getAllCategoryService();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getAllCategory controller : " + error,
        });
    }
};

const getAnCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await managerCategoryService.getAnCategoryService(id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getAnCategory controller : " + error,
        });
    }
};

const updateCategory = async (req, res) => {
    try {
        const { categoryName } = req.body;
        if (!categoryName) {
            return res.status(400).json({
                err: 1,
                msg: "Missing inputs !",
            });
        }
        const id = req.params.id;
        const response = await managerCategoryService.updateCategoryService(
            categoryName,
            id
        );
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at updateCategory controller : " + error,
        });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await managerCategoryService.deleteCategoryService(id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at deleteCategory controller : " + error,
        });
    }
};
module.exports = {
    createCategory,
    getAllCategory,
    getAnCategory,
    updateCategory,
    deleteCategory,
};
