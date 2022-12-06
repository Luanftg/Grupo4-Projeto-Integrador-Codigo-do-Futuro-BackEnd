const fs = require('fs');
const crypto = require('crypto');

module.exports = class OrderProduct {
    constructor(orderProduct) {
        this.id = crypto.randomUUID();
        this.orderProductId = orderProduct?.orderProductId
        this.productId = orderProduct?.productId
        this.quantity = orderProduct?.quantity
        this.value = orderProduct?.value
    }
    
static async create(orderProduct) {
    const orderProductList = await this.getList();
    let exist = false;
    for (let i=0; i<orderProductList.length;i++) {
        const orderProductDB = orderProductList[i];
        if(orderProductDB.id == orderProduct.id) {   //atualiza o ProductOrderProduct
            orderProductDB.id = orderProduct?.id
        orderProductDB.orderProductId = orderProduct?.orderProductId
        orderProductDB.productId = orderProduct?.productId
        orderProductDB.quantity = orderProduct?.quantity
        orderProductDB.value = orderProduct?.value  
            exist = true;
            break;
        }
    }
    
    if(!exist) {
        const  objectLiteral = {...orderProduct};
        orderProductList.push(objectLiteral);
    }
    OrderProduct.saveJsonLocal(orderProductList);
}

static async getList() {
    var orderProducts =[];
    try {
        const data = fs.readFileSync('db/orderProducts.json','utf8');
        orderProducts = JSON.parse(data);
    } catch (err) {
        console.log(err);
    }
    return orderProducts;
}
                
static async saveJsonLocal(orderProducts) {  
    try {
        fs.writeFileSync('db/orderProducts.json', JSON.stringify(orderProducts), {encoding: "utf8"});
    } catch (err) {
        console.error(err);
    }
}

static async findById(id){
    const orderProductList = await this.getList();
    for(let i=0; i<orderProductList.length; i++){
        const orderProductDb = orderProductList[i]
        if(orderProductDb.id.toString() === id.toString()){
            return orderProductDb
        }
    }
    return null
}

static async delete(id){
    const orderProductList = await this.getList();
    const newList = []
    for(let i=0; i<orderProductList.length; i++){
        const orderProductDb = orderProductList[i]
        if(orderProductDb.id.toString() !== id.toString()){
            newList.push(orderProductDb)
        }
    }
    OrderProduct.saveJsonLocal(newList);
}
}