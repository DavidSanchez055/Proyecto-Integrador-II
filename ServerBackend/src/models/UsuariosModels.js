const mongoose = require('mongoose');
const schema = mongoose.schema;

const UsuariosSchema = schema({
    nombre: String,
    apellido: String,
    email: String,
    password: String,
    usuario: String
});

module.exports = mongoose.model('usuarios_collection', UsuariosSchema);