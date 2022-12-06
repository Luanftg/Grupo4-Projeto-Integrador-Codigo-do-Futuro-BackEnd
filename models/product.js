const fs = require('fs');
const crypto = require('crypto');

module.exports = class Product {
    constructor(product){
        this.id = crypto.randomUUID();
        this.name = product?.name
        this.description = product?.description
        this.price = product?.price
        this.quantity = product?.quantity
    }
    
static async create(product) {
    const productList = await this.getList();
    let exist = false;
    for (let i=0; i<productList.length;i++) {   //Update Product
        const productDB = productList[i];
        if(productDB.id == product.id) { 
        productDB.id = product?.id
        productDB.name = product?.name
        productDB.description = product?.description
        productDB.price = product?.price
        productDB.quantity = product?.quantity 
        exist = true;
        break;
        }
    }
    
    if(!exist) {
        const  objectLiteral = {...product};
        productList.push(objectLiteral);
    }
    Product.saveJsonLocal(productList);
}

static async getList() {
    var products =[];
    try {
        const data = fs.readFileSync('db/products.json','utf8');
        products = JSON.parse(data);
    } catch (err) {
        console.log(err);
    }
    return products;
}
                
static async saveJsonLocal(products) {  
    try {
        fs.writeFileSync('db/products.json', JSON.stringify(products), {encoding: "utf8"});
    } catch (err) {
        console.error(err);
    }
}

static async findById(id){
    const productsList = await this.getList();
    for(let i=0; i<productsList.length; i++){
        const productDb = productsList[i]
        if(productDb.id.toString() === id.toString()){
            return productDb;
        }
    }
    return null
}

static async delete(id){
    const productsList = await this.getList();
    const newList = [];
    for(let i=0; i<productsList.length; i++){
        const productDb = productsList[i]
        if(productDb.id.toString() !== id.toString()){
            newList.push(productDb);
        }
    }

    Product.saveJsonLocal(newList);
}
}