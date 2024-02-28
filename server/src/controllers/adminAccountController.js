const multer = require('multer');
const path = require('path');

const adminAccountService = require('../services/adminAccountService');

const createAdminAccount = async (req, res) => {
    const { userName, email, password, gender, address, phone, role } = req.body;

    try {
        if (!userName || !email || !password || !gender || !address || !phone || !role) {
            return res.status(400).json({
                err: 1,
                msg: 'Missing inputs !',
            });
        }
        const reponse = await adminAccountService.createAdminService(req.body);
        return res.status(200).json(reponse);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at admin Account controller : ' + error,
        });
    }
};

const getAllAdminAccount = async (req, res) => {
    try {
        const response = await adminAccountService.getAllAdminService();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at getAllAdminAccount controller : ' + error,
        });
    }
};

const getAnAdminAccount = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await adminAccountService.getAnAdminService(id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at getAnAdminAccount controller : ' + error,
        });
    }
};

const updateAdminAccount = async (req, res) => {
    try {
        // const { userName, gender, address, phone, role } = req.body;
        // if (!userName || !gender || !address || !phone || !role) {
        //     return res.status(400).json({
        //         err: 1,
        //         msg: "Missing inputs !",
        //     });
        // }
        const id = req.params.id;
        const info = {
            phone: req.body.phone,
            userName: req.body.userName,
            address: req.body.address,
            gender: req.body.gender,
            role: req.body.role,
        };
        if (req.file) {
            info.img = '/storageUploads/avartarAdmins/' + req.file.filename;
        }
        const response = await adminAccountService.updateAdminService(info, id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at updateAdminAccount controller : ' + error,
        });
    }
};

const deleteAdminAccount = async (req, res) => {
    try {
        const id = req.params.id;
        const response = await adminAccountService.deleteAdminService(id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at deleteAdminAccount controller : ' + error,
        });
    }
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/public/storageUploads/avartarAdmins/');
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, Date.now() + '-' + fileName);
    },
});

const upload = multer({
    storage,
    limits: { fileSize: '30000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/;
        const mimeType = fileTypes.test(file.mimetype);
        const extname = fileTypes.test(path.extname(file.originalname));

        if (mimeType && extname) {
            return cb(null, true);
        }
        cb('Give proper files format to upload');
    },
}).single('img');
module.exports = {
    createAdminAccount,
    getAllAdminAccount,
    getAnAdminAccount,
    updateAdminAccount,
    deleteAdminAccount,
    upload,
};
