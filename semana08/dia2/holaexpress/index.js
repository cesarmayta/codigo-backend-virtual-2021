const express = require('express')

const app = express()
const port = 3000

app.get('/',(req,res) =>{
    res.send('<H1>HOLA MUNDO EXPRESS</H1>')
})

app.get('/json',function(req,res){
    res.json({nombre:'cesar mayta'});
})

app.get('/usuario/:id',function(req,res){
    res.send("usuario id : " + req.params.id);
})

app.listen(port,() =>{
    console.log('Servidor en http://localhost:',port)
})