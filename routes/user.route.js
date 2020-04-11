let express = require('express');
let controller = require('../controllers/user.controller');
let validate = require('../validate/user.validate');
let authMiddleware = require('../middlewares/auth.middleware');

let router = express.Router();
router.get('/', authMiddleware.requireAuth, controller.index);

router.get('/cookie', (req, res) => {
  res.cookie('user-id', '12345');
  res.send('hello');
});

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.get);

router.post('/create', validate.postCreate, controller.postCreate);

module.exports = router;