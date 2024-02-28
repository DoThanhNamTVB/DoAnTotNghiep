const express = require('express');

const managerProductFavouriteController = require('../controllers/managerProductFavouriteController');

const router = express.Router();

router.post('/create', managerProductFavouriteController.createProductFavourite);
router.get('/getAll/:userId', managerProductFavouriteController.getAllProductFavourite);
router.delete('/delete', managerProductFavouriteController.deleteProductFavourite);

module.exports = router;
