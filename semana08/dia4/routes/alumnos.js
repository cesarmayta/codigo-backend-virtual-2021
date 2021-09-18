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

    router.post("/",async function(req,res,next){
        //const {nombre,email,pais} = req.body;
        const {body: alumno} = req;
        console.log(alumno);

        /*if(alumno.nombre == null || alumno.email == null || alumno.pais == null){
            res.status(400).json({
                status:false,
                content:"debe llenar los datos"
            })
        }*/

        try{
            const crearAlumno = await alumnosService.create({alumno});
            res.status(201).json({
                status:true,
                content:crearAlumno
            });
        }catch(err){
            next(err);
        }



    });

    router.put("/:alumnoId",async function(req,res,next){
        const { alumnoId } = req.params;
        const {body:alumno} = req;
        console.log("alumno id : " + alumnoId);
        try{
            const updateAlumnos = await alumnosService.update({
                alumno,
                alumnoId
            });
            res.status(200).json({
                status:true,
                content:'ok'
            })
        }catch(err){
            next(err);
        }

    });

    router.delete("/:alumnoId",async function(req,res,next){
        const { alumnoId } = req.params;

        try{
            const deleteAlumno = await alumnosService.delete({alumnoId});

            res.status(200).json({
                status:true,
                content:'registro eliminado'
            })
        }catch (err){
            next(err);
        }
    });
}

module.exports = alumnosApi;