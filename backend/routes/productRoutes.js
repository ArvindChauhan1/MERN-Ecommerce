const { getAllProducts } = require('../controllers/productControllers');

const router = require('express').Router();

router.route("/product").get(getAllProducts);

module.exports = router;