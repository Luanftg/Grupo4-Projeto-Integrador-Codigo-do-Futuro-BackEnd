var express = require('express');
const homeController = require('../controller/homeController');
const usersController = require('../controller/usersController');
const productController = require('../controller/productsController');
const orderController = require('../controller/ordersController');
const orderProductController = require('../controller/orderProductController');
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

router.get('/orders', orderController.index);
router.post('/orders', orderController.create);
router.get('/orders/:id', orderController.findById);
router.delete('/orders/:id', orderController.delete);
router.put('/orders/:id', orderController.update);

router.get('/orderProducts', orderProductController.index);
router.post('/orderProducts', orderProductController.create);
router.get('/orderProducts/:id', orderProductController.findById);
router.delete('/orderProducts/:id', orderProductController.delete);
router.put('/orderProducts/:id', orderProductController.update);


module.exports = router;
