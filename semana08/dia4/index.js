const express = require('express');
const app = express();

const {config} = require('./config/index');
const alumnosApi = require('./routes/alumnos');

//middlewares
//const alumnoValidate = require('./middlewares/validationHandler');

app.use(express.json());
//app.use(alumnoValidate);

alumnosApi(app);


app.listen(config.port,function(){
    console.log('SERVIDOR CORRIENDO EN PUERTO : ',config.port);
})
