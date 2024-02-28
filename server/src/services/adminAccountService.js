const db = require('../models/index');
const bcrypt = require('bcryptjs');

const hashPassword = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

//create an admin
const createAdminService = async ({ userName, email, password, gender, address, phone, role }) => {
    {
        try {
            const countEmail = await db.Admin.count({
                where: { email: email },
            });
            if (countEmail > 0) {
                return {
                    err: 2,
                    msg: 'Email đã tồn tại',
                };
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
                return {
                    err: 0,
                    msg: 'Tạo tài khoản thành công',
                    response,
                };
            }
        } catch (error) {
            throw new Error(error);
        }
    }
};

//get all admin
const getAllAdminService = async () => {
    {
        try {
            const response = await db.Admin.findAll({ order: [['createdAt', 'DESC']] }, { raw: true });

            return {
                err: response ? 0 : 2,
                msg: response ? 'SUCCESSFULL' : 'Fail to get all admins',
                response,
            };
        } catch (error) {
            throw new Error(error);
        }
    }
};

//get an admin-account
const getAnAdminService = async (id) => {
    {
        try {
            const response = await db.Admin.findOne({
                where: { id },
            });

            return {
                err: response ? 0 : 2,
                msg: response ? 'SUCCESSFULL' : 'Account admin not exits',
                response,
            };
        } catch (error) {
            throw new Error(error);
        }
    }
};

//update an admin-account

const updateAdminService = async (admin, id) => {
    {
        try {
            await db.Admin.update(
                {
                    userName: admin.userName,
                    phone: admin.phone,
                    gender: admin.gender,
                    role: admin.role,
                    address: admin.address,
                    img: admin.img,
                },
                {
                    where: { id: id },
                }
            );

            return {
                err: 0,
                msg: 'Updated',
            };
        } catch (error) {
            throw new Error(error);
        }
    }
};

const deleteAdminService = async (id) => {
    {
        try {
            const reponse = await db.Admin.destroy({
                where: { id: id },
            });

            return {
                err: reponse ? 0 : 2,
                msg: reponse ? 'DELETED' : 'No find admin to delete',
                reponse,
            };
        } catch (error) {
            throw new Error(error);
        }
    }
};

module.exports = {
    createAdminService,
    getAllAdminService,
    getAnAdminService,
    updateAdminService,
    deleteAdminService,
};
