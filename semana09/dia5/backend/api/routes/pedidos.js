const express = require('express')
const Pedidoservice = require('../services/pedidos')
const { config } = require('../config/index')

function pedidosApi(app){
    const router = express.Router();
    app.use('/pedidos',router);

    const pedidoservice = new Pedidoservice();

    router.get('/',async function(req,res,next){
        try{
            const pedidos = await pedidoservice.getAllPedido()
            res.status(200).json({
                status:true,
                content: pedidos
            })
        }catch(err){
            next(err)
        }
    })

    router.post('',async function(req,res,next){
        const { body: pedido} = req;
        console.log(pedido)
        try{
            const pedidoId = await pedidoservice.createPedido({pedido})
            res.status(200).json({
                status:true,
                content: 'pedido creado'
            })
        }catch(err){
            next(err)
        }
    })

}

module.exports = pedidosApi