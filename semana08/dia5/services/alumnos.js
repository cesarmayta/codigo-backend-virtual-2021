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
}

module.exports = AlumnosService;