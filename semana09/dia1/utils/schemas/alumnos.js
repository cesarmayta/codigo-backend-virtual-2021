const joi = require('@hapi/joi');

const alumnoNombreSchema = joi.string().min(1);
const alumnoEmailSchema = joi.string().email();
const alumnoPaisSchema = joi.string().valid('Peru','Chile','Colombia','Ecuador','Bolivia','Argentina','Brasil');

const createAlumnoSchema = {
    nombre : alumnoNombreSchema.required(),
    email : alumnoEmailSchema.required(),
    pais : alumnoPaisSchema.required()
}

const updateAlumnoSchema = {
    nombre: alumnoNombreSchema,
    email: alumnoEmailSchema,
    pais : alumnoPaisSchema
}

module.exports = {
    createAlumnoSchema,
    updateAlumnoSchema
}