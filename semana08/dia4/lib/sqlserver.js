const {config} = require('../config/index');
const sql = require('mssql');

class SqlServerLib{

    constructor(){
        this.dbSettings = {
            user: config.dbUser,
            password: config.dbPassword,
            server: config.dbServer,
            database: config.dbDatabase,
            options: {
              encrypt: true, // for azure
              trustServerCertificate: true, // change to true for local dev / self-signed certs
            },
        }
    }

    async getConnection() {
        try {
            // make sure that any items are correctly URL encoded in the connection string
            const pool = await sql.connect(this.dbSettings);
            //const result = await pool.request().query('select top 2 * from alumnos'); 
            //console.log(result.recordsets);
            return pool;
        } catch (err) {
            console.error(err);
        }
    }

    async querySql(sql){
        const pool = await this.getConnection();
        const result = pool.request().query(sql);
        return result
    }
}

module.exports = SqlServerLib;