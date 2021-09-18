const express = require('express');
const AlumnosService = require('../services/alumnos');

function alumnosApi(app){
    const router = express.Router();
    app.use('/alumnos',router);

    const alumnosService = new AlumnosService();

    router.get('/',async function(req,res,next){
        const { tags } = req.query;

        try {
            const alumnos = await alumnosService.getAll({ tags });

            res.status(200).json({
                status: true,
                content: alumnos
            });

        }catch(err){
            next(err);
        }
    });
}

module.exports = alumnosApi;