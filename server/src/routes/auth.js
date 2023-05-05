const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");

const authController = require("../controllers/auth");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get(
    "/me",
    [authMiddleware.isAuthentication],
    authController.getCurrentUser
);

module.exports = router;
