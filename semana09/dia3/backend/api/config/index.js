require('dotenv').config()

const config = {
    port: process.env.PORT,
    mongoUri:process.env.MONGOURI || 'mongodb://127.0.0.1:27017',
    dbName:process.env.DBNAME || 'tiendatech'
}

module.exports = {config}