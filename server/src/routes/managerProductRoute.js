const express = require("express");

const managerProductController = require("../controllers/managerProductController");

const router = express.Router();

router.post("/create", managerProductController.createProduct);
router.get("/get-all", managerProductController.getAllProduct);
router.get("/:id", managerProductController.getAnProduct);
router.put("/:id", managerProductController.updateProduct);
router.delete("/:id", managerProductController.deleteProduct);
router.get(
    "/getCategory/:categorySlug",
    managerProductController.getProductByCategory
);
router.get("/get/get-product-new", managerProductController.getProductNew);
router.get("/get/get-product-hot", managerProductController.getProductHot);

module.exports = router;
