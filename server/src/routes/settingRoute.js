const express = require('express');

const router = express.Router();

const settingController = require('../controllers/settingController');

router.put('/put/:id', settingController.updateSetting);
router.get('/get/:id', settingController.getSetting);
router.get('/getAll', settingController.getAllSetting);

module.exports = router;
