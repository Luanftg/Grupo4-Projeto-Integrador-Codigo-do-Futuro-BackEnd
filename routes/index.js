var express = require('express');
const homeController = require('../controller/homeController');
const usersController = require('../controller/usersController');
var router = express.Router();

/* GET home page. */
router.get('/', homeController.index);

router.get('/users', usersController.index);
router.post('/users', usersController.create);
router.get('/users/:id', usersController.findById);
router.delete('/users/:id', usersController.delete);
router.put('/users/:id', usersController.update);


module.exports = router;
