const express = require('express'); //Librerias
const app = express();

app.get('/',(req,res) => {
    res.status(200).send({
    success: 'true',
    message: 'Server Funciona',
    })
});
//Routes
const UsuariosRoutes = require('./routes/UserRoutes');

//Setting Routes



//Exports
module.exports = app;