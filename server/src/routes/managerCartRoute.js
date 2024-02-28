const express = require('express');

const router = express.Router();

const managerCartController = require('../controllers/managerCartController');

router.post('/create/:userId', managerCartController.createCartController);
router.get('/getCart/:userId', managerCartController.getCartByUserIdController);
router.put('/:userId/:productId', managerCartController.updateCartController);
router.delete('/:userId/:productId', managerCartController.deleteCartController);

module.exports = router;
