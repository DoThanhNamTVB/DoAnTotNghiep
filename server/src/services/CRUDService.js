var bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const db = require('../models/index');

let createNewUser = async (data) => {
    {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                userName: data.userName,
                email: data.email,
                password: hashPasswordFromBcrypt,
                gender: data.gender === '1' ? true : false,
                address: data.address,
                phone: data.phone,
            });

            return 'already created user';
        } catch (error) {
            throw new Error(error);
        }
    }
};

let hashUserPassword = async (password) => {
    {
        try {
            var hashPassword = await bcrypt.hashSync(password, salt);
            return hashPassword;
        } catch (error) {
            throw new Error(error);
        }
    }
};

module.exports = {
    createNewUser,
};
