const UserModel = require("../models/UsuariosModels");
const {CreateUser,FindAllUser} = require("../repository/UserRepository");

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


module.exports = {
    create,
    findAll
};