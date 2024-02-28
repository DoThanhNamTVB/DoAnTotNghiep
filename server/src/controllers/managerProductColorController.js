const multer = require('multer');
const path = require('path');
const managerProductColorService = require('../services/managerProductColorService');

const createProductColor = async (req, res) => {
    const { colorId, quantity } = req.body;

    try {
        if (!colorId || !quantity) {
            return res.status(400).json({
                err: 1,
                msg: 'Missing inputs !',
            });
        }
        const info = {
            productId: req.body.productId,
            colorId: req.body.colorId,
            quantity: req.body.quantity,
            img: req.file ? '/storageUploads/products/' + req.file.filename : '',
        };

        const reponse = await managerProductColorService.createProductColorService(info);
        return res.status(200).json(reponse);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at create product color controller : ' + error,
        });
    }
};

const getAllByIdProductColorColor = async (req, res) => {
    try {
        const { idProduct } = req.params;
        const response = await managerProductColorService.getAllByIdProductColorService(idProduct);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at getAllByIdProductColorColor controller : ' + error,
        });
    }
};

const getAnByIdProductColor = async (req, res) => {
    try {
        const { idProduct, idColor } = req.params;
        const response = await managerProductColorService.getAnByIdProductColorService(idProduct, idColor);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at getAnByIdProductColor controller : ' + error,
        });
    }
};

const updateProductColor = async (req, res) => {
    try {
        const { colorId, quantity } = req.body;
        if (!colorId || !quantity) {
            return res.status(400).json({
                err: 1,
                msg: 'Missing inputs !',
            });
        }
        const info = {
            productId: req.body.productId,
            colorId: req.body.colorId,
            quantity: req.body.quantity,
        };

        if (req.file) {
            info.img = '/storageUploads/products/' + req.file.filename;
        }
        const { idProduct, idColor } = req.params;

        const response = await managerProductColorService.updateProductColorService(info, idProduct, idColor);
        // console.log(response);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail at updateProductColor controller : ' + error,
        });
    }
};

const deleteProductColor = async (req, res) => {
    try {
        const { idProduct, idColor } = req.params;
        const response = await managerProductColorService.deleteProductColorService(idProduct, idColor);
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
        cb(null, 'src/public/storageUploads/products/');
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
}).single('image');

module.exports = {
    createProductColor,
    getAllByIdProductColorColor,
    getAnByIdProductColor,
    updateProductColor,
    deleteProductColor,
    upload,
};
