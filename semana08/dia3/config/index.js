require('dotenv').config();

const config = {
    port : process.env.PORT || 3000,
    dbUser: process.env.DB_USER || "expressadmin",
    dbPassword: process.env.DB_PASSWORD || "123456",
    dbServer: process.env.DB_SERVER || "localhost",
    dbDatabase: process.env.DB_DATABASE || "codigo",
}

module.exports = {config};