const MongoLib = require('../lib/mongo')

class ProductoService{
    constructor(){
        this.collection = 'app_producto'
        this.mongoDB = new MongoLib()
    }

    async getAll(){
        const data = await this.mongoDB.getAll(this.collection)
        return data || []
    }
}

module.exports = ProductoService