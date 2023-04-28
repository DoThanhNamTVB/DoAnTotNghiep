const express = require("express");

const router = express.Router();

const managerCartController = require("../controllers/managerCartController");

router.get("/get-all", managerCartController.getAllCartController);
router.get("/:id", managerCartController.getAnCartController);

module.exports = router;
