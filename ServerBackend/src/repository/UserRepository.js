const {Response} = require("../utils/Response");
const UserModel = require("../models/UsuariosModels");

module.exports.CreateUser = async (user) => {
    return new Promise((resolve, reject) => {
        user
        .save()
        .then((resp)=> {
            Response.status = 201;
            Response.message = "Usuario creado correctamente";
            Response.result = resp;
            resolve(Response);
        })
        .catch((err) => {
            console.log("Error:",err);
            Response.status = 500;
            Response.message = "Error en el servidor";
            Response.result = err;
            reject(Response);
        })
});
}

module.exports.FindAllUser = async () => {
    return new Promise((resolve, reject) => {
        UserModel.find()
        .then((resp)=> {
            Response.status = 200;
            Response.message = "Registros encontrados";
            Response.result = resp;
            resolve(Response);
        })
        .catch((err) => {
            console.log("Error:",err);
            Response.status = 500;
            Response.message = "Error en el servidor";
            Response.result = err;
            reject(Response);
        })
});
}