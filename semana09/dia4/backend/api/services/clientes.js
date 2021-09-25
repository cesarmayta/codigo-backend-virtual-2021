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
        const newCliente = {
            nombre : cliente.name,
            email : cliente.email,
            foto : cliente.picture
        }
        const clienteId = await this.mongoDB.create(this.collection,newCliente)
        return clienteId
    }
}

module.exports = ClienteService