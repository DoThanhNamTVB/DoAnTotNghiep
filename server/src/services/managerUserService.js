const db = require('../models/index');

const getAllUseService = async () => {
    try {
        const response = await db.User.findAll({ order: [['createdAt', 'DESC']] }, { raw: true });

        return {
            err: response ? 0 : 2,
            msg: response ? 'SUCCESSFULL' : 'Fail to get all users',
            response,
        };
    } catch (error) {
        throw new Error(error);
    }
};

const getAnUseService = async (id) => {
    try {
        const response = await db.User.findOne({
            where: { id: id },
            include: [
                {
                    model: db.Product,
                    as: 'Product_Favourites',

                    include: [{ model: db.Color }, { model: db.Category }],
                },
                // { model: db.Product, as: "Carts" },
            ],
        });
        return {
            err: response ? 0 : 2,
            msg: response ? 'Get user is ok' : 'Not found user!',
            response,
        };
    } catch (error) {
        throw new Error(error);
    }
};

const updateInfoUser = async (payload, id) => {
    try {
        const response = await db.User.update(payload, {
            where: { id: id },
        });
        return {
            err: response ? 0 : 2,
            msg: response ? 'Updated status is successfull' : 'Update status fail !',
        };
    } catch (error) {
        throw new Error(error);
    }
};

const updateStatusUserService = async (status, id) => {
    try {
        const response = await db.User.update({ status }, { where: { id: id } });
        return {
            err: response ? 0 : 2,
            msg: response ? 'Updated status is successfull' : 'Update status fail !',
        };
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = {
    getAllUseService,
    getAnUseService,
    updateInfoUser,
    updateStatusUserService,
};
