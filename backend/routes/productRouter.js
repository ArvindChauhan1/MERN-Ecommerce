const router = require('express').Router();

const { getAllProducts } = require('../controllers/productControllers');

router.route("/products").get(getAllProducts);

module.exports = router;