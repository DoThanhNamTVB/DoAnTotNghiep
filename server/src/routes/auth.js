const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');

const authController = require('../controllers/auth');

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/loginAdmin', authController.loginAdmin);
router.get('/me', [authMiddleware.isAuthentication], authController.getCurrentUser);

router.get('/admin', [authMiddleware.isAuthentication], authController.getCurrentAdmin);

router.put('/updatePassword/:id', authController.updatePasswordUser);

module.exports = router;
