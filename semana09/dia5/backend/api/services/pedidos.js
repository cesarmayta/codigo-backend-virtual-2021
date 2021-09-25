const MongoLib = require('../lib/mongo')
const { config } = require('../config/index')

class PedidoService{
    constructor(){
        this.collection = 'app_pedidos'
        this.mongoDB = new MongoLib()
    }

    async getAllPedido(){
        const data = await this.mongoDB.getAll(this.collection)
        return data || []
    }

    async createPedido({pedido}){
        const PedidoId = await this.mongoDB.create(this.collection,pedido)
        return PedidoId
    }
}

module.exports = PedidoService