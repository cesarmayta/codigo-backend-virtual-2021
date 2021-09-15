const fs = require('fs');

function leer(ruta,cb){
    fs.readFile(ruta,(err,data)=> {
        cb(data.toString());
    });
}

function escribir(ruta,contenido,cb){
    fs.writeFile(ruta,contenido,function (err){
        if(err){
            console.error('No eh podido escribir el texto',err);
        }else{
            console.log('se ha escrito el texto');
        }
    });
}

function borrar(ruta,cb){
    fs.unlink(ruta,cb);
}

leer(__dirname + '/archivo1.txt',console.log);
escribir(__dirname + '/archivo2.txt','ESTE ES MI 2DO ARCHIVO CREADO CON NODEJS',console.log);
//borrar(__dirname + '/archivo2.txt',console.log);