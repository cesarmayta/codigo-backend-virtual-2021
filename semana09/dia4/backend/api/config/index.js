require('dotenv').config()

const config = {
    port: process.env.PORT,
    mongoUri:process.env.MONGOURI || 'mongodb://127.0.0.1:27017',
    dbName:process.env.DBNAME || 'tiendatech',
    imgUrl:process.env.IMGURL || 'https://res.cloudinary.com/dd9ad40qm/',
    googleClientID:process.env.GCLIENTID || '879157433796-a811bbq098urdrc5vtp08kburdt2qcm0.apps.googleusercontent.com',
    googleSecretKey:process.env.GSECRETKEY || '-PdYYgqvJ9tPr6er78-piFvN'
}

module.exports = {config}