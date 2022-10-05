const User = require("../models/usuario");

const controlHome = {}

controlHome.getHome = async (req,res) => {
    res.send({
        msg:'Funciona el GET'
    })
}

controlHome.postHome = async (req,res) => {
    const {usuario,contraseña,email} = req.body;
    const newUsuario = new User({
        usuario,
        contraseña,
        email
    }); 

    const user = await (newUsuario.save());

    return res.json({
        msg: 'Usuario creado correctamente',
        user
    });
}

controlHome.putHome = (req,res) => {
    res.send({
        msg:'Funciona el PUT'
    })
}

controlHome.deleteHome = (req,res) => {
    res.send({
        msg:'Funciona el Delete'
    })
}

module.exports = controlHome;