const UserModel = require("../models/UsuariosModels");
const {CreateUser,FindAllUser} = require("../repository/UserRepository");
const bcrypt = require('bcrypt-nodejs');

bcrypt.hash(params.password, null, null, async function(err, hash) {
    if(hash){
        user.nombres = params.nombre;
        user.apellidos = params.apellido;
        user.correo = params.correo;
        user.password = hash;
        user.username = params.username;
    }

});

async function create(req, res) {
    const params = req.body;
    const user = new UserModel();
    if(params.nombres == "" || params.nombres == undefined){
        res.status(404).send({message:"El nombre es requerido"});
        return;
    }
        user.nombres = params.nombre;
        user.apellidos = params.apellido;
        user.correo = params.correo;
        user.password = params.password;
        user.username = params.username;

    const Response = await CreateUser(user);
    res.status(Response.status).send(Response);
    
};
async function findAll(req, res) {
    const Response = await FindAllUser();
    res.status(Response.status).send(Response);
};

async function findById (req, res) {
    const { id } = req.params;
    const user = await UserModel.findById(id);
    res.json(user);
}


async function updateUserData  (req, res) {
    const id = req.params.id;
    const body = req.body;
    
    let user = new UserModel();
    user.nombres = body.nombres;
    user.apellidos = body.apellidos;
    user.correo = body.correo;
    user.password = body.password;
    user.username = body.username;


    const response = await updateUserData(id, body);
    res.status(response.status).send(response);
}


async function login(req, res){
    const params = req.body;
    const user = await UserModel.findOneUsuario(params.usuario);
    if(user){
        bcrypt.compare(params.password, user.result.password, (err, check) =>{
            if(check){
                res.status(200).send({user});
            }else{
                res.status(400).send({message:"Usuario o contraseña incorrecta"});
            }
        });
    }else{  
        res.status(400).send({message:"Usuario o contraseña incorrecta"});
    }

    res.json(user);
}

module.exports = {
    create,
    findAll,
    updateUserData
};