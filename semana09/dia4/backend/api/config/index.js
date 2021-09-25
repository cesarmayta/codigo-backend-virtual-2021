require('dotenv').config()

const config = {
    port: process.env.PORT,
    mongoUri:process.env.MONGOURI || 'mongodb://127.0.0.1:27017',
    dbName:process.env.DBNAME || 'tiendatech',
    imgUrl:process.env.IMGURL || 'https://res.cloudinary.com/dd9ad40qm/',
    googleClientID:process.env.GCLIENTID || '879157433796-0l5v66qccfk28n3o7ks0j0qfm4qs9srh.apps.googleusercontent.com',
    googleSecretKey:process.env.GSECRETKEY || '-PdYYgqvJ9tPr6er78-piFvN'
}

module.exports = {config}