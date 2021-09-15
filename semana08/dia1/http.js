const http = require('http');

http.createServer(function (req,res){
    console.log('nueva peticion http');
    console.log('ruta : ' + req.url);

    res.write('<H1>Hola Mundo node</H1>');
    res.end();

}).listen(3000);