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

module.exports = {
    registerService,
    loginService,
};
