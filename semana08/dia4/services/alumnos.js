const SqlServerLib = require('../lib/sqlserver');
const alumnosApi = require('../routes/alumnos');

class AlumnosService{
    constructor(){
        this.sql = new SqlServerLib();
    }

    async getAll(){
        const sqlAll = "select top 10 * from alumnos";
        const result = await this.sql.querySql(sqlAll);
        return result.recordset;
    }

    async getById(alumnoId){
        const SqlOne = "select * from alumnos where id='"+ alumnoId +"'";
        const result = await this.sql.querySql(SqlOne);
        return result.recordset;
    }

    //creación de nuevos alumnos
    async create({alumno}){
        const sqlCreate = "insert into alumnos(nombre,email,pais) values('" + alumno.nombre + "','" + alumno.email + "','" + alumno.pais + "');";
        await this.sql.querySql(sqlCreate);
        const sqlNuevoId = "select max(id) as id from alumnos";
        const result = await this.sql.querySql(sqlNuevoId);
        return result.recordset;
    }

    async update({alumno,alumnoId}){
        const sqlUpdate = "update alumnos set nombre='" +  alumno.nombre + "',email='" +  alumno.email + "',pais='" + alumno.pais + "' where id='"+ alumnoId + "'"
        await this.sql.querySql(sqlUpdate);
        //return 'ok';
    }

    async delete({ alumnoId}){
        const sqlDelete = "delete from alumnos where id = '" + alumnoId + "';";
        await this.sql.querySql(sqlDelete);
    }

}

module.exports = AlumnosService;