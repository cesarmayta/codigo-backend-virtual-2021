require('dotenv').config();

const config = {
    port: process.env.PORT || 3000,
    mongoUri:process.env.MONGOURI || 'mongodb://127.0.0.1:27017',
    dbName:process.env.DBNAME || 'codigo'
};

module.exports = {config};