const express = require('express');

const router = express.Router();

const chartController = require('../controllers/chartController');

router.get('/chartRevenueMonth', chartController.chartRevenueMonth);
router.get('/chartOrder', chartController.chartOrder);

module.exports = router;
