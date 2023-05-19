const managerProductFavouriteService = require("../services/managerProductFavourite");

const createProductFavourite = async (req, res) => {
    const { userId, productId } = req.body;

    try {
        if (!userId || !productId) {
            return res.status(400).json({
                err: 1,
                msg: "Missing inputs !",
            });
        }
        const response =
            await managerProductFavouriteService.createProductFavouriteService(
                req.body
            );
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at createProductFavouriteService controller : " + error,
        });
    }
};

const getAllProductFavourite = async (req, res) => {
    try {
        const userId = req.params.userId;
        const response =
            await managerProductFavouriteService.getAllProductFavouriteService(
                userId
            );
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getAllProductFavourite controller : " + error,
        });
    }
};

const deleteProductFavourite = async (req, res) => {
    try {
        const response =
            await managerProductFavouriteService.deleteProductFavouriteService(
                req.body
            );
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at deleteProductFavourite controller : " + error,
        });
    }
};
module.exports = {
    createProductFavourite,
    getAllProductFavourite,
    deleteProductFavourite,
};
