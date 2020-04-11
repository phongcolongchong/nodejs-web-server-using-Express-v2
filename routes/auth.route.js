let express = require('express');
let controller = require('../controllers/auth.controller');

let router = express.Router();
router.get('/login', controller.login);

router.post('/login', controller.postLogin);

module.exports = router;