const express = require('express');

const managerColorController = require('../controllers/managerColorController');

const router = express.Router();

router.post('/create', managerColorController.createColor);
router.get('/get-all', managerColorController.getAllColor);
router.get('/:id', managerColorController.getAnColor);
router.put('/:id', managerColorController.updateColor);
router.delete('/:id', managerColorController.deleteColor);

module.exports = router;
