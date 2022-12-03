const fs = require('fs');

module.exports = class User {
    constructor(cliente){
        this.id = cliente?.id
        this.name = cliente?.name
        
    }
    
static async create(client) {
    var objectLiteral = {...client};
    const clientList = await this.getList();
    let exist = false;
    for (let i=0; i<clientList.length;i++) {
        const clientDB = clientList[i];
        if(clientDB.id == client.id) {
            clientDB.name = client.name;
            clientDB.id = client.id;
            exist = true;
            break
        }
    }

        if(!exist) {
            objectLiteral = {...client};
            clientList.push(objectLiteral);
        }

        const content = JSON.stringify(clientList);
        //console.log(clientList);

        try {
            fs.writeFileSync('db/users.json', content, {encoding:"utf8"});

        } catch (err) {
        console.error(err);
        }
           
        }

            static async getList() {
                var users;
                try {
                    const data = await fs.readFileSync('db/users.json','utf8');
                    console.log(data);
                    users = JSON.parse(data);
                    console.log(users);
                } catch (err) {
                    console.log(err);
                }
                return users;
        }
}