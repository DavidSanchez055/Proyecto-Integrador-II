const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ProductsSchema = schema({
    img:String,
    nombres: String,
    nombreTienda: String,
    precio: String,
    descripción: String
});

module.exports = mongoose.model('products_collection', ProductsSchema);