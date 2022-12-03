var express = require('express');
const homeController = require('../controller/homeController');
const usersController = require('../controller/usersController');
var router = express.Router();

/* GET home page. */
router.get('/', homeController.index);

router.get('/user', usersController.index);
router.post('/user', usersController.create);


module.exports = router;
