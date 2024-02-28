const express = require('express');

const router = express.Router();

const managerUserController = require('../controllers/managerUserController');

router.get('/getAllUser', managerUserController.getAllUser);
router.get('/:userId', managerUserController.getAnUser);
router.put('/info-user/:id', managerUserController.upload, managerUserController.updateInfoUser);
router.put('/:userId', managerUserController.updateStatusUser);

module.exports = router;
