const express = require("express");

const managerOrderController = require("../controllers/managerOrderController");

const router = express.Router();

router.post("/create", managerOrderController.createOrder);
router.get("/getAll", managerOrderController.getAllOrder);
router.get("/getStatus/:statusOrder", managerOrderController.getOrderByStatus);
router.get("/get/:orderId", managerOrderController.getOrderById);
router.get("/get/:userId", managerOrderController.getOrderByUserId);
router.get(
    "/get/:userId/:statusOrder",
    managerOrderController.getOrderByUserStatus
);
router.put("/status/:orderId", managerOrderController.updateStatusOrder);
router.put("/user/:orderId", managerOrderController.updateOrderByUser);
router.put("/cancel/:orderId", managerOrderController.cancelOrder);

module.exports = router;
