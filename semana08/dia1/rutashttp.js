const http = require('http');

http.createServer(router).listen(3000);

function router(req,res){
    console.log('Nueva peticion');
    console.log(req.url);

    switch(req.url) {
        case '/hola':
            let saludo = hola();
            res.write(saludo);
            res.end();
            break;
        case '/api':
            //res.writeHead(201, {'Content-Type':'application/json'});
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify({nombre:1,email:2}));
            res.end();
        default:
            res.write('<H1>BIENVENIDO A MI SITIO WEB NODEJS</H1>')
            res.end();
    }
}

function hola() {
    return '<b>HOLA COMO ESTAS</b>';
}

console.log("ESCUCHANDO HTTP EN EL PUERTO 3000");