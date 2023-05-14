const multer = require("multer");
const path = require("path");
const managerUserServices = require("../services/managerUserService");

const getAllUser = async (req, res) => {
    try {
        const response = await managerUserServices.getAllUseService();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getAllUser Controller : " + error,
        });
    }
};

const getAnUser = async (req, res) => {
    try {
        const id = req.params.userId;
        const response = await managerUserServices.getAnUseService(id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at getAnUser Controller : " + error,
        });
    }
};

const updateInfoUser = async (req, res) => {
    try {
        const id = req.params.id;
        const info = {
            email: req.body.email,
            phone: req.body.phone,
            userName: req.body.userName,
            address: req.body.address,
            gender: req.body.gender,
        };

        if (req.file) {
            info.img = "/storageUploads/avatars/" + req.file.filename;
        }
        const response = await managerUserServices.updateInfoUser(info, id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at updateInfo Controller : " + error,
        });
    }
};

const updateStatusUser = async (req, res) => {
    try {
        const { status } = req.body;
        const id = req.params.id;
        const response = await managerUserServices.updateStatusUserService(
            status,
            id
        );
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at updateStatusUser Controller : " + error,
        });
    }
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "src/public/storageUploads/avatars/");
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(" ").join("-");
        cb(null, Date.now() + "-" + fileName);
    },
});

const upload = multer({
    storage,
    limits: { fileSize: "30000000" },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/;
        const mimeType = fileTypes.test(file.mimetype);
        const extname = fileTypes.test(path.extname(file.originalname));

        if (mimeType && extname) {
            return cb(null, true);
        }
        cb("Give proper files format to upload");
    },
}).single("img");

module.exports = {
    getAllUser,
    getAnUser,
    updateInfoUser,
    updateStatusUser,
    upload,
};
