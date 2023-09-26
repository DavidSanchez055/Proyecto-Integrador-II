const express = require('express'); //Librerias
const app = express();

app.get('/empleados',(req,res) => {
    res.status(200).send({
    success: 'true',
    message: 'Server Funciona',
    })
});

//Exports
module.exports = app;