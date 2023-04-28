const db = require("../models/index");

//get all cart
const getAllCartService = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Cart.findAll(
                { order: [["createdAt", "DESC"]] },
                { raw: true }
            );

            resolve({
                err: response ? 0 : 2,
                msg: response ? "SUCCESSFULL" : "Fail to get all carts",
                response,
            });
        } catch (error) {
            reject(error);
        }
    });
};

//get an cart
const getAnCartService = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Cart.findOne({
                where: { id },
            });

            resolve({
                err: response ? 0 : 2,
                msg: response ? "SUCCESSFULL" : "cart is not exits",
                response,
            });
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    getAllCartService,
    getAnCartService,
};
