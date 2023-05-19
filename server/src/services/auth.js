const db = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const hashPassword = (password) =>
    bcrypt.hashSync(password, bcrypt.genSaltSync(10));

const registerService = ({
    userName,
    email,
    password,
    gender,
    address,
    phone,
}) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await db.User.findOrCreate({
                where: { email: email },
                defaults: {
                    userName,
                    email,
                    password: hashPassword(password),
                    gender,
                    address,
                    phone,
                },
            });
            const token =
                response[1] &&
                jwt.sign(
                    { id: response[0].id, email: response[0].email },
                    process.env.SECRET_KEY,
                    { expiresIn: "2d" }
                );

            resolve({
                err: token ? 0 : 2,
                msg: token
                    ? "Register is sucessfully!"
                    : "Email has been already used!",
                token: token || null,
            });
        } catch (error) {
            reject(error);
        }
    });

const loginService = ({ email, password }) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await db.User.findOne({
                where: { email: email },
                raw: true,
            });

            const isCorrectPassword =
                response && bcrypt.compareSync(password, response.password);

            const token =
                isCorrectPassword &&
                jwt.sign(
                    { id: response.id, email: response.email },
                    process.env.SECRET_KEY,
                    {
                        expiresIn: "2d",
                    }
                );

            resolve({
                err: token ? 0 : 2,
                msg: token
                    ? "Login is sucessfully!"
                    : response
                    ? "Password is not correct"
                    : "Email not found!",
                token: token || null,
            });
        } catch (error) {
            reject(error);
        }
    });

const loginAdminService = ({ email, password }) =>
    new Promise(async (resolve, reject) => {
        try {
            const response = await db.Admin.findOne({
                where: { email: email },
                raw: true,
            });

            const isCorrectPassword =
                response && bcrypt.compareSync(password, response.password);

            const token =
                isCorrectPassword &&
                jwt.sign(
                    { id: response.id, email: response.email },
                    process.env.SECRET_KEY,
                    {
                        expiresIn: "2d",
                    }
                );
            const role = response && response?.role;

            resolve({
                err: token ? 0 : 2,
                msg: token
                    ? "Login admin is sucessfully!"
                    : response
                    ? "Password admin is not correct"
                    : "Email admin not found!",
                token: token || null,
                role: token ? role : null,
            });
        } catch (error) {
            reject(error);
        }
    });

const getCurrentUserService = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await db.User.findOne(
                {
                    where: { id },
                    include: [
                        { model: db.Product, include: [{ model: db.Color }] },
                    ],
                    attributes: {
                        exclude: ["password"],
                    },
                },
                { raw: true },
                { nest: true }
            );
            resolve({
                err: response ? 0 : 1,
                msg: response ? "OK" : "Fail to get current user",
                response,
            });
        } catch (error) {
            reject(error);
        }
    });
};

const getCurrentAdminService = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await db.Admin.findOne(
                {
                    where: { id },
                    attributes: {
                        exclude: ["password"],
                    },
                },
                { raw: true },
                { nest: true }
            );
            resolve({
                err: response ? 0 : 1,
                msg: response ? "OK" : "Fail to get current admin",
                response,
            });
        } catch (error) {
            reject(error);
        }
    });
};

const updatePasswordUserService = (payload, id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.User.findOne({ where: { id: id } });

            const isPasswordOld =
                user && bcrypt.compareSync(payload.passwordOld, user.password);

            if (!isPasswordOld) {
                resolve({
                    err: 1,
                    msg: "Update fail at password old",
                });
            }

            const response =
                isPasswordOld &&
                (await db.User.update(
                    { password: hashPassword(payload.passwordNew) },
                    {
                        where: { id: id },
                    },
                    { raw: true },
                    { nest: true }
                ));
            resolve({
                err: response ? 0 : 1,
                msg: response
                    ? "Update successfull"
                    : "Fail to update password user",
            });
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    registerService,
    loginService,
    getCurrentUserService,
    getCurrentAdminService,
    updatePasswordUserService,
    loginAdminService,
};
