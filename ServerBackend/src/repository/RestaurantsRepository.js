const {Response} = require("../utils/Response"); 
const UserModel = require("../models/RegionsModels");

module.exports.CreateRestaurant = async (user) =>{
    return new Promise((resolve, reject) => {
        user
        .save()
        .then((resp)=>{
            Response.status = 201;
            Response.message = "Se ha creado el Restaurant Correctamente";
            Response.result = resp;
            resolve(Response);
        })
        .catch((err) =>{
            console.log("error:", err)
            Response.status = 500;
            Response.message = "Ocurrio un error en el servidor";
            Response.result = err;
            reject(Response);
        })
    });
}

module.exports.FindAllRestaurant = async (sort) =>{
    return new Promise((resolve, reject) => {
        UserModel
        .find()
        .sort(sort)
        .then((resp)=>{
            Response.status = 200;
            Response.message = "Registros Encontrados";
            Response.result = resp;
            resolve(Response);
        })
        .catch((err) =>{
            console.log("error:", err)
            Response.status = 500;
            Response.message = "Ocurrio un error en el servidor";
            Response.result = err;
            reject(Response);
        })
    });
}

module.exports.FindOneRestaurant = async (id) =>{
    return new Promise((resolve, reject) => {
        UserModel
        .findById({_id: id})
        .then((resp)=>{
            Response.status = 200;
            Response.message = "Registros Encontrados";
            Response.result = resp;
            resolve(Response);
        })
        .catch((err) =>{
            console.log("error:", err)
            Response.status = 500;
            Response.message = "Ocurrio un error en el servidor";
            Response.result = err;
            reject(Response);
        })
    });
}

module.exports.FindOneRestaurantId = async (usuario) =>{
    return new Promise((resolve, reject) => {
        UserModel
        .findOne({usuario: usuario})
        .then((resp)=>{
            Response.status = 200;
            Response.message = "Registros Encontrados";
            Response.result = resp;
            resolve(Response);
        })
        .catch((err) =>{
            console.log("error:", err)
            Response.status = 500;
            Response.message = "Ocurrio un error en el servidor";
            Response.result = err;
            reject(Response);
        })
    });
}

module.exports.deleteRestaurant = async (id) =>{
    return new Promise((resolve, reject) => {
        UserModel
        .findByIdAndDelete(id)
        .then((resp)=>{
            Response.status = 200;
            Response.message = "Registro Eliminado correctamente";
            Response.result = resp;
            resolve(Response);
        })
        .catch((err) =>{
            console.log("error:", err)
            Response.status = 500;
            Response.message = "Ocurrio un error en el servidor";
            Response.result = err;
            reject(Response);
        })
    });
}


module.exports.updateRestaurant = async (id, user) =>{
    return new Promise((resolve, reject) => {
        UserModel
        .findOneAndUpdate({_id : id}, {nombres: user.nombres, apellidos: user.apellidos})
        .then((resp)=>{
            Response.status = 200;
            Response.message = "Registro Actualizado correctamente";
            Response.result = resp;
            resolve(Response);
        })
        .catch((err) =>{
            console.log("error:", err)
            Response.status = 500;
            Response.message = "Ocurrio un error en el servidor";
            Response.result = err;
            reject(Response);
        })
    });
}