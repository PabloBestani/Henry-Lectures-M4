const express = require("express");
const morgan = require("morgan");
const usersRouter = require("./routes/usersRouter");


//!FALTA PERMITIR EL ACCESO CORS A CUALQUIER FUENTE QUE NECESITE
const server = express();
server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });


server.use(morgan('dev'));
server.use(express.json());

server.use(usersRouter);


module.exports = server;