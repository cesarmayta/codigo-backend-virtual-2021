const express = require('express');
const AlumnosService = require('../services/alumnos');

function alumnosApi(app){
    //creamos la ruta principal para alumnos
    const router = express.Router();
    app.use("/alumnos",router);

    const alumnosService = new AlumnosService();

    router.get("/",async function(req,res,next){
        try{
            const alumnos = await alumnosService.getAll();
            res.status(200).json({
                status:true,
                content:alumnos
            });

        }catch(err){
            next(err);
        }
    });

    router.get("/:alumnoId",async function(req,res,next){
        const alumnoId = req.params.alumnoId;
        try{
            const alumno = await alumnosService.getById(alumnoId);
            res.status(200).json({
                status:true,
                content:alumno
            });

        }catch(err){
            next(err);
        }
    });
}

module.exports = alumnosApi;