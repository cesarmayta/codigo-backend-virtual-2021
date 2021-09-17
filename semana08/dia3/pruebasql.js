console.log("PRUEBA DE CONEXIÓN A MS SQL SERVER");
const sql = require('mssql')

const sqlConfig = {
    user: 'expressadmin',
    password: '123456',
    server: 'localhost',
    database: 'codigo',
    options: {
      encrypt: true, // for azure
      trustServerCertificate: true // change to true for local dev / self-signed certs
    }
  }

async function getConnection() {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        const pool = await sql.connect(sqlConfig);
        const result = await pool.request().query('select top 2 * from alumnos'); 
        console.log(result.recordsets);
    } catch (err) {
        console.error(err);
    }
}

getConnection();