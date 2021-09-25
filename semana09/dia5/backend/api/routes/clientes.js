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

    router.post('/auth/google',async function(req,res,next){
        const client = new OAuth2Client(config.googleClientID)
        const { token }  = req.body
        console.log(token)
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: config.googleClientID
        });
        const cliente = ticket.getPayload();
        const newCliente = {
            nombre : cliente.name,
            email : cliente.email,
            foto : cliente.picture
        }
        try{
            const clienteId = await clienteService.updateClienteByEmail(newCliente)
            res.status(200).json({
                status:true,
                content: newCliente
            })
        }catch(err){
            next(err)
        }
    })

}

module.exports = clientesApi