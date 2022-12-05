const Order = require('../models/order.js');

module.exports = {
    index: async (req,res,next) => {
        const orders = await Order.getList();
        res.status(200).send(orders);
    },
    create: async (req,res,next) => {
        const order= new Order(req.body);
        Order.create(order);
        res.status(201).send(order);
    },
    delete: (req, res, next) => {
        Order.delete(req.params.id)
        res.status(204).send("")
    },
    update: async (req, res, next) => {
        let orderDb = await Order.findById(req.params.id)
        if(!orderDb) return res.status(404).send({mensagem: "Pedido não encontrado"})
        const order = new Order(req.body)
        console.log(orderDb);
        order.id = orderDb.id
        Order.create(order)
        res.status(200).send(order)
    },
    findById: async (req, res, next) => {
        let orderDb = await Order.findById(req.params.id);
        if(!orderDb) return res.status(404).send({mensagem: "Pedido não encontrado"});
        res.status(200).send(orderDb);
    }
}