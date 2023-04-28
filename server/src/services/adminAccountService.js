const db = require("../models/index");
const bcrypt = require("bcryptjs");

const hashPassword = (password) =>
    bcrypt.hashSync(password, bcrypt.genSaltSync(10));

//create an admin
const createAdminService = ({
    userName,
    email,
    password,
    gender,
    address,
    phone,
    role,
}) => {
    return new Promise(async (resolve, reject) => {
        try {
            const countEmail = await db.Admin.count({
                where: { email: email },
            });
            if (countEmail > 0) {
                resolve({
                    err: 2,
                    msg: "Email đã tồn tại",
                });
            } else {
                const response = await db.Admin.create({
                    userName,
                    email,
                    password: hashPassword(password),
                    gender,
                    address,
                    phone,
                    role,
                });
                resolve({
                    err: 0,
                    msg: "Tạo tài khoản thành công",
                    response,
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};

//get all admin
const getAllAdminService = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Admin.findAll(
                { order: [["createdAt", "DESC"]] },
                { raw: true }
            );

            resolve({
                err: response ? 0 : 2,
                msg: response ? "SUCCESSFULL" : "Fail to get all admins",
                response,
            });
        } catch (error) {
            reject(error);
        }
    });
};

//get an admin-account
const getAnAdminService = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await db.Admin.findOne({
                where: { id },
            });

            resolve({
                err: response ? 0 : 2,
                msg: response ? "SUCCESSFULL" : "Account admin not exits",
                response,
            });
        } catch (error) {
            reject(error);
        }
    });
};

//update an admin-account

const updateAdminService = (admin, id) => {
    return new Promise(async (resolve, reject) => {
        const { password, ...ad } = admin;
        const hashPass = hashPassword(password);
        try {
            await db.Admin.update(
                { ...ad, password: hashPass },
                {
                    where: { id: id },
                }
            );

            resolve({
                err: 0,
                msg: "Updated",
            });
        } catch (error) {
            reject(error);
        }
    });
};

const deleteAdminService = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const reponse = await db.Admin.destroy({
                where: { id: id },
            });

            resolve({
                err: reponse ? 0 : 2,
                msg: reponse ? "DELETED" : "No find admin to delete",
                reponse,
            });
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    createAdminService,
    getAllAdminService,
    getAnAdminService,
    updateAdminService,
    deleteAdminService,
};
