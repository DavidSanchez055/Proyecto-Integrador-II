const UserControllers = require('../controllers/UserControllers');
const express = require('express');
const api = express.Router();

api.post('/usuarios/create', UserControllers.create);
api.get('/usuarios/listar', UserControllers.findAll);

module.exports = api;