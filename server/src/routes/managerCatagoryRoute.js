const express = require("express");

const router = express.Router();

const managerCategoryController = require("../controllers/managerCategoryController");

router.post("/create", managerCategoryController.createCategory);
router.get("/get-all", managerCategoryController.getAllCategory);
router.get("/:id", managerCategoryController.getAnCategory);
router.put("/:id", managerCategoryController.updateCategory);
router.delete("/:id", managerCategoryController.deleteCategory);

module.exports = router;
