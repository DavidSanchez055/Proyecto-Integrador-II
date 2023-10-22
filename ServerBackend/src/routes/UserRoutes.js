const UserControllers = require('../controllers/UserControllers');
const express = require('express');
const api = express.Router();

api.post('/usuarios/create', UserControllers.create);
api.get('/usuarios/listar', UserControllers.findAll);
api.get('/usuarios/findbyid/:id', UserControllers.findById);
api.get('/usuarios/findbyusername/:username', UserControllers.findOneUsuario);
api.delete('/usuarios/deleteUser/:id', UserControllers.deleteUserData);
api.put('/usuarios/update/:id', UserControllers.updateUserData);

module.exports = api;