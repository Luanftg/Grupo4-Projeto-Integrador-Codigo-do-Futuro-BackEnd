var express = require('express');
const homeController = require('../controller/homeController');
const usersController = require('../controller/usersController');
const productController = require('../controller/productsController');
var router = express.Router();

/* GET home page. */
router.get('/', homeController.index);

router.get('/users', usersController.index);
router.post('/users', usersController.create);
router.get('/users/:id', usersController.findById);
router.delete('/users/:id', usersController.delete);
router.put('/users/:id', usersController.update);

router.get('/products', productController.index);
router.post('/products', productController.create);
router.get('/products/:id', productController.findById);
router.delete('/products/:id', productController.delete);
router.put('/products/:id', productController.update);


module.exports = router;
