const User = require('../models/user.js');

module.exports = {
    index: async (req,res,next) => {
        //let lista = [{id: 01,nome: "Luan"}, {id:2, nome: Lena}];
        const users = await User.getList();
        //console.log(users);
        res.status(200).send(users);
    },

    create: async (req,res,next) => {
        const client = new User(req.body);
        User.create(client);
        res.status(201).send(client);
        // const client = req.body;
        // console.log(client);
        // await User.create();
    }
}