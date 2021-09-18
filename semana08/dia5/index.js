const express = require('express');
const app = express();

const { config } = require('./config/index');
const alumnosApi = require('./routes/alumnos');


alumnosApi(app);



app.listen(config.port, function() {
    console.log(`Listening http://localhost:${config.port}`);
  });