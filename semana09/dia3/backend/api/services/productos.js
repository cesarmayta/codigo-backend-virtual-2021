const MongoLib = require('../lib/mongo')
const { config } = require('../config/index')

class ProductoService{
    constructor(){
        this.collection = 'app_producto'
        this.mongoDB = new MongoLib()
    }

    async getAll(){
        const data = await this.mongoDB.getAll(this.collection)
        //console.log(parseFloat(data[0]['precio']))
        for(var c=0;c < data.length;c++){
            data[c]['precio'] = parseFloat(data[c]['precio'])
            data[c]['imagen'] = config.imgUrl + data[c]['imagen']
        }
        return data || []
    }
}

module.exports = ProductoService