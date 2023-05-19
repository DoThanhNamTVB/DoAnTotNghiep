const express = require("express");

const router = express.Router();

const adminAccountController = require("../controllers/adminAccountController");

router.post("/admin/create-account", adminAccountController.createAdminAccount);
router.get("/admin/account", adminAccountController.getAllAdminAccount);
router.get("/admin/:id", adminAccountController.getAnAdminAccount);
router.put(
    "/admin/:id",
    adminAccountController.upload,
    adminAccountController.updateAdminAccount
);
router.delete("/admin/:id", adminAccountController.deleteAdminAccount);

module.exports = router;
