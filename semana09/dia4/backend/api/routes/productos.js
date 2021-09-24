const express = require('express')
const ProductoService = require('../services/productos')

function productosApi(app){
    const router = express.Router();
    app.use('/productos',router);

    const productoService = new ProductoService();

    router.get('/',async function(req,res,next){
        try{
            const productos = await productoService.getAll()
            res.status(200).json({
                status:true,
                content: productos
            })
        }catch(err){
            next(err)
        }
    })

}

module.exports = productosApi