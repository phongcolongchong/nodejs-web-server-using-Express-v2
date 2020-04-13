let express = require('express');

let controller = require('../controllers/cart.controller');

let router = express.Router();

router.get('/add/:productId', controller.addToCart);

module.exports = router;