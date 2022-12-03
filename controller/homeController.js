module.exports = {
    index: function(req, res, next) {
        res.status(200).send({mensagem: "Bem vindo!"});
      }
};