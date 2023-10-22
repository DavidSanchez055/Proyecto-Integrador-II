const {Response} = require("../utils/Response"); 
const UserModel = require("../models/UsuariosModels");

module.exports.CreateUser = async (user) =>{
    return new Promise((resolve, reject) => {
        user
        .save()
        .then((resp)=>{
            Response.status = 201;
            Response.message = "Se ha creado el Usuario Correctamente";
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

module.exports.FindAllUser = async () =>{
    return new Promise((resolve, reject) => {
        UserModel
        .find()
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

module.exports.findById = async (id) =>{
    return new Promise((resolve, reject) => {
        UserModel
        .findOne({_id: id})
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


module.exports.deleteUserData = async (id) =>{
    UserModel.findOneAndDelete({_id :id})
    .then((resp)=>{
        response.status = 200;
        response.message = "Registro Eliminado";
        response.result = resp;
        resolve(response);
    })
    .catch((err) =>{
        console.log("error:", err)
        response.status = 500;
        response.message = "Ocurrio un error en el servidor";
        response.result = err;
        reject(response);
    });
}

module.exports.updateUser = async (id) =>{
    return new Promise((resolve, reject) => {
        const query = { _id: id };
        UserModel
        .findOneAndUpdate(query, {nombres: user.nombres, apellidos: user.apellidos, correo: user.correo, password: user.password, username: user.username})
        .then((resp)=>{
            Response.status = 200;
            Response.message = "Registro actualizado";
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
    }
)}         
