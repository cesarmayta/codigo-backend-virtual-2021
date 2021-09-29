require('dotenv').config()

const config = {
    port: process.env.PORT,
    mongoUri:process.env.MONGOURI,
    dbName:process.env.DBNAME,
    imgUrl:process.env.IMGURL,
    googleClientID:process.env.GCLIENTID
}

module.exports = {config}