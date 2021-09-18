const MongoLib = require('../lib/mongo');

class AlumnosService{
    constructor(){
        this.collection = 'alumnos';
        this.mongoDB = new MongoLib();
    }

    async getAll({tags}){
        const query = tags && { tags:{ $in: tags}};
        const data = await this.mongoDB.getAll(this.collection,query);
        return data || [];
    }

    async createAlumno({alumno}){
        const crearAlumnoId = await this.mongoDB.create(this.collection,alumno);
        return crearAlumnoId;
    }

    async updateAlumno({alumnoId,alumno}){
        const updateAlumnoId = await this.mongoDB.update(
            this.collection,
            alumnoId,
            alumno
        );
        return updateAlumnoId;
    }

    async deleteAlumno({alumnoId}){
        const deleteAlumnoId = await this.mongoDB.delete(this.collection,alumnoId);
        return deleteAlumnoId;
    }
}

module.exports = AlumnosService;