const express = require('express')
const cors = require('cors')
const app = express()

const { config } = require('./config/index')
const productosApi = require('./routes/productos')
const clientesApi = require('./routes/clientes')
const pedidosApi = require('./routes/pedidos')

//para documentación del api
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

app.use(cors())

app.use(express.json());


productosApi(app)
clientesApi(app)
pedidosApi(app)

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.listen(config.port,function(){
    console.log(`Servidor listo http://localhost:${config.port}`)
})