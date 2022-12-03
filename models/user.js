const fs = require('fs');

module.exports = class User {
    constructor(cliente){
        this.id = cliente?.id
        this.name = cliente?.name
        this.telefone = cliente?.telefone
        this.email = cliente?.email
        this.cpf = cliente?.cpf
        this.cep = cliente?.cep
        this.logradouro = cliente?.logradouro
        this.numero = cliente?.numero
        this.bairro = cliente?.bairro
        this.cidade = cliente?.cidade
        this.estado = cliente?.estado
        this.complemento = cliente?.complemento      
    }
    
static async create(client) {
    var objectLiteral = {...client};
    const clientList = await this.getList();
    let exist = false;
    for (let i=0; i<clientList.length;i++) {
        const clientDB = clientList[i];
        if(clientDB.id == client.id) {   //atualiza o Client
            clientDB.name = client.name;
            clientDB.id = client.id;
            clientDB.telefone = client.telefone
            clientDB.email = client.email
            clientDB.cpf = client.cpf
            clientDB.cep = client.cep
            clientDB.logradouro = client.logradouro
            clientDB.numero = client.numero
            clientDB.bairro = client.bairro
            clientDB.cidade = client.cidade
            clientDB.estado = client.estado
            clientDB.complemento = client.complemento
            exist = true;
            break
        }
    }
    
    if(!exist) {
        const  objectLiteral = {...client};
        clientList.push(objectLiteral);
    }
    //const content = JSON.stringify(clientList);
    User.saveJsonLocal(clientList);
}

static async getList() {
    var users =[];
    try {
        const data = fs.readFileSync('db/clientes.json','utf8');
        console.log(data);
        users = JSON.parse(data);
        console.log(users);
    } catch (err) {
        console.log(err);
    }
    return users;
}
                
static async saveJsonLocal(clientes) {  
    try {
        fs.writeFileSync('db/clientes.json', JSON.stringify(clientes), {encoding: "utf8"});
    } catch (err) {
        console.error(err);
    }
}

static async findById(id){
    const clientList = await this.getList();
    for(let i=0; i<clientList.length; i++){
        const clienteDb = clientList[i]
        if(clienteDb.id.toString() === id.toString()){
            return clienteDb
        }
    }
    return null
}

static async delete(id){
    const clientList = await this.getList();
    const newList = []
    for(let i=0; i<clientList.length; i++){
        const clienteDb = clientList[i]
        if(clienteDb.id.toString() !== id.toString()){
            newList.push(clienteDb)
        }
    }

    User.saveJsonLocal(newList);
}
}