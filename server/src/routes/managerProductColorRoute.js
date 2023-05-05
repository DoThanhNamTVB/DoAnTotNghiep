const express = require("express");

const managerProductColorController = require("../controllers/managerProductColorController");

const router = express.Router();

router.post(
    "/create",
    managerProductColorController.upload,
    managerProductColorController.createProductColor
);
router.get(
    "/getAll/:idProduct",
    managerProductColorController.getAllByIdProductColorColor
);
router.get(
    "/:idProduct/:idColor",
    managerProductColorController.getAnByIdProductColor
);
router.put(
    "/:idProduct/:idColor",
    managerProductColorController.upload,
    managerProductColorController.updateProductColor
);
router.delete(
    "/:idProduct/:idColor",
    managerProductColorController.deleteProductColor
);

module.exports = router;
