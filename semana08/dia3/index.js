const SqlServerLib = require('./lib/sqlserver');

async function prueba(){
    sqlsrv = new SqlServerLib();
    const sqlAlumnos = "select top 1 * from alumnos";
    const result = await sqlsrv.querySql(sqlAlumnos);
    console.log(result.recordsets);
}

prueba();
