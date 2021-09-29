const MongoLib = require('../lib/mongo')
const { config } = require('../config/index')

class ClienteService{
    constructor(){
        this.collection = 'app_clientes'
        this.mongoDB = new MongoLib()
    }

    async getAllCliente(){
        const data = await this.mongoDB.getAll(this.collection)
        return data || []
    }

    async createCliente(cliente){
        console.log(cliente)
        const clienteId = await this.mongoDB.create(this.collection,cliente)
        return clienteId
    }

    async updateClienteByEmail(cliente){
        console.log(cliente)
        const clienteId = await this.mongoDB.updateByEmail(this.collection,cliente.email,cliente)
        return clienteId
    }
}

module.exports = ClienteService