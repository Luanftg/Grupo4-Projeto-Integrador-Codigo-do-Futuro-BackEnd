const fs = require('fs');
const crypto = require('crypto');

module.exports = class Order {
    constructor(order){
        this.id = crypto.randomUUID();
        this.clientId = order?.clientId
        this.totalValue = order?.totalValue
        this.date = new Date();
    }
    
static async create(order) {
    const orderList = await this.getList();
    let exist = false;
    for (let i=0; i<orderList.length;i++) {
        const orderDB = orderList[i];
        if(orderDB.id == order.id) {   //atualiza Order
        orderDB.id = order?.id
        orderDB.clientId = order?.clientId
        orderDB.totalValue = order?.totalValue
        orderDB.date = order?.date
            exist = true;
            break;
        }
    }
    
    if(!exist) {
        const  objectLiteral = {...order};
        orderList.push(objectLiteral);
    }
    Order.saveJsonLocal(orderList);
}

static async getList() {
    var orders =[];
    try {
        const data = fs.readFileSync('db/orders.json','utf8');
        orders = JSON.parse(data);
    } catch (err) {
        console.log(err);
    }
    return orders;
}
                
static async saveJsonLocal(orders) {  
    try {
        fs.writeFileSync('db/orders.json', JSON.stringify(orders), {encoding: "utf8"});
    } catch (err) {
        console.error(err);
    }
}

static async findById(id){
    const orderList = await this.getList();
    for(let i=0; i<orderList.length; i++){
        const orderDb = orderList[i]
        if(orderDb.id.toString() === id.toString()){
            return orderDb
        }
    }
    return null
}

static async delete(id){
    const orderList = await this.getList();
    const newList = []
    for(let i=0; i<orderList.length; i++){
        const orderDb = orderList[i]
        if(orderDb.id.toString() !== id.toString()){
            newList.push(orderDb)
        }
    }
    Order.saveJsonLocal(newList);
}
}