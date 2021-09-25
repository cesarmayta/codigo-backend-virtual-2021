const express = require('express')
const ClienteService = require('../services/clientes')
const { OAuth2Client } = require('google-auth-library')
const { config } = require('../config/index')

function clientesApi(app){
    const router = express.Router();
    app.use('/clientes',router);

    const clienteService = new ClienteService();

    router.get('/',async function(req,res,next){
        try{
            const clientes = await clienteService.getAllCliente()
            res.status(200).json({
                status:true,
                content: clientes
            })
        }catch(err){
            next(err)
        }
    })

    router.post('/login',async function(req,res,next){
        const client = new OAuth2Client(config.googleClientID)
        const { token }  = req.body
        console.log(token)
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: config.googleClientID
        });
        const cliente = ticket.getPayload();
        console.log(cliente.name)
        console.log(cliente.email)
        console.log(cliente.picture)
        try{
            const clienteId = await clienteService.createCliente(cliente)
            res.status(200).json({
                status:true,
                content: cliente
            })
        }catch(err){
            next(err)
        }
    })

}

module.exports = clientesApi