const express = require('express');
const { restart } = require('nodemon');
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

    router.post('/',async function(req,res,next){
        const { body: alumno} = req;
        console.log(alumno);

        try {
            const createAlumnoId = await alumnosService.createAlumno({alumno});

            res.status(201).json({
                status: true,
                content: 'alumno creado'
            });

        }catch(err){
            next(err);
        }
    });

    router.put('/:alumnoId',async function(req,res,next){
        const { alumnoId } = req.params;
        const { body: alumno} = req;
        console.log(alumno);

        try {
            const updateAlumnoId = await alumnosService.updateAlumno(
                {alumnoId,
                alumno}
            );

            res.status(201).json({
                status: true,
                content: 'alumno actualizado'
            });

        }catch(err){
            next(err);
        }
    });

    router.delete('/:alumnoId',async function(req,res,next){
        const {alumnoId} = req.params;

        try{
            const deleteAlumnoId = await alumnosService.deleteAlumno({alumnoId});

            res.status(200).json({
                status:true,
                content:'alumno eliminado'
            });

        }catch (err){
            next(err);
        }
    });
}

module.exports = alumnosApi;