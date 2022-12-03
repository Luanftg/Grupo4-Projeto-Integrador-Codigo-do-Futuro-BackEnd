const User = require('../models/user.js');

module.exports = {
    index: async (req,res,next) => {
        const users = await User.getList();
        res.status(200).send(users);
    },

    create: async (req,res,next) => {
        const client = new User(req.body);
        User.create(client);
        res.status(201).send(client);
    },
    delete: (req, res, next) => {
        User.apagarPorId(req.params.id)
        res.status(204).send("")
    },
    update: async (req, res, next) => {
        let clienteDb = await User.buscaPorId(req.params.id)
        if(!clienteDb) return res.status(404).send({mensagem: "Cliente não encontrado"})

        const cliente = new User(req.body)
        cliente.id = clienteDb.id
        User.create(cliente)
        res.status(200).send(cliente)
    },
    findById: async (req, res, next) => {
        let clienteDb = await User.findById(req.params.id);
        if(!clienteDb) return res.status(404).send({mensagem: "Usuário não encontrado"});
        res.status(200).send(clienteDb);
    }
}