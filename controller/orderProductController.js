const OrderProduct = require('../models/orderProduct.js');

module.exports = {
    index: async (req,res,next) => {
        const users = await OrderProduct.getList();
        res.status(200).send(users);
    },

    create: async (req,res,next) => {
        const OorderProduct = new OrderProduct(req.body);
        OrderProduct.create(OorderProduct);
        res.status(201).send(OorderProduct);
    },
    delete: (req, res, next) => {
        OrderProduct.delete(req.params.id)
        res.status(204).send("")
    },
    update: async (req, res, next) => {
        let OrderProductDb = await OrderProduct.findById(req.params.id)
        if(!OrderProductDb) return res.status(404).send({mensagem: "Pedido de produto não encontrado"})

        const OorderProduct = new OrderProduct(req.body)
        OorderProduct.id = OrderProductDb.id
        OrderProduct.create(OorderProduct)
        res.status(200).send(OorderProduct)
    },
    findById: async (req, res, next) => {
        let OrderProductDb = await OrderProduct.findById(req.params.id);
        if(!OrderProductDb) return res.status(404).send({mensagem: "Pedido de produto não encontrado"});
        res.status(200).send(OrderProductDb);
    }
}