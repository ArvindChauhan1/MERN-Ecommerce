const router = require('express').Router();

const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails } = require('../controllers/productControllers');

router.route("/products").get(getAllProducts);

router.route("/product/new").post(createProduct);

router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails);

module.exports = router;