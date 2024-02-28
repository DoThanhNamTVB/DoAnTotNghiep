const express = require('express');

const managerProductController = require('../controllers/managerProductController');

const router = express.Router();

router.post('/create', managerProductController.createProduct);
router.get('/get-all', managerProductController.getAllProduct);
router.get('/:id', managerProductController.getAnProduct);
router.put('/:id', managerProductController.updateProduct);
router.delete('/:id', managerProductController.deleteProduct);
router.get('/getCategory/:categorySlug', managerProductController.getProductByCategory);

//sử dụng query string
router.get('/getLimit/get-Limit-Category', managerProductController.getProductCategoryLimit);
router.get('/get/get-product-new', managerProductController.getProductNew);
router.get('/get/get-product-hot', managerProductController.getProductHot);
router.get('/get/get-product-search/:keySearch', managerProductController.getProductSearch);
router.get('/get/get-product-similar/:price', managerProductController.getProductSimilar);
router.get('/get/productFilter', managerProductController.getProductFilter);

module.exports = router;
