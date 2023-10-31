const mongoose = require('mongoose');
const schema = mongoose.Schema;

const RestaurantsModels = schema({
    id: String,
    img: String,
    nombre: String,
    descripcion:String
});

module.exports = mongoose.model('restaurant_collection', RestaurantsModels);