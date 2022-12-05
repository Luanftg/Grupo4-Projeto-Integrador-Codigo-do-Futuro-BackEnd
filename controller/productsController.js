const Product = require('../models/product.js');

module.exports = {
    index: async (req,res,next) => {
        const products = await Product.getList();
        res.status(200).send(products);
    },
    create: async (req,res,next) => {
        const product= new Product(req.body);
        Product.create(product);
        res.status(201).send(product);
    },
    delete: (req, res, next) => {
        Product.delete(req.params.id)
        res.status(204).send("")
    },
    update: async (req, res, next) => {
        let productDb = await Product.findById(req.params.id)
        if(!productDb) return res.status(404).send({mensagem: "Produto não encontrado"})
        const product = new Product(req.body)
        console.log(productDb);
        product.id = productDb.id
        Product.create(product)
        res.status(200).send(product)
    },
    findById: async (req, res, next) => {
        let productDb = await Product.findById(req.params.id);
        if(!productDb) return res.status(404).send({mensagem: "Produto não encontrado"});
        res.status(200).send(productDb);
    }
}