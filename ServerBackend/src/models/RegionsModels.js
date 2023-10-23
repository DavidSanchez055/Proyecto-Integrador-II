const mongoose = require('mongoose');
const schema = mongoose.Schema;

const RegionsModels = schema({
    id: String,
    nombre: String,
    img: String,
    email: String,
    edad: String,
    usuario: String,
    password: String
});

module.exports = mongoose.model('regions_collection', RegionsModels);