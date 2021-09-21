const express = require('express');
const app = express();

const { config } = require('./config/index');
const alumnosApi = require('./routes/alumnos');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

//body parser
app.use(express.json());

//middlewares
app.use(function (req, res, next) {
  console.log('Hora:', Date.now());
  next();
});

alumnosApi(app);

app.use(notFoundHandler);


app.listen(config.port, function() {
    console.log(`Listening http://localhost:${config.port}`);
  });