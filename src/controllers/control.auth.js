const User = require("../models/usuario");
const generarJWT = require("../helpers/generar-jwt");
const bcrypt = require('bcrypt');


const ctrlAuth = {};


ctrlAuth.iniciarSesion = async (req, res) => {

    const { username, password } = req.body;

    try {
        // Buscar si el usuario pertenece a nuestro sistema
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).json({
                ok: false,
                msg: 'Error al autenticarse' - 'Usuario no encontrado'
            });
        }

        if (!user.isActive) {
            return res.status(400).json({
                ok: false,
                msg: 'Error al autenticarse' - 'Usuario inactivo'
            });
        }

        // Verificar la contraseña
        //comparesSync --> es para verificar si la contraseña esta bien scriptada asi poder validar la contra
        const validPassword = bcrypt.compareSync(password, user.password);

        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Error al autenticarse' - 'Contraseña incorrecta'
            });
        }

        // Generar el token
        const token = await generarJWT({ uid: user._id })

        return res.json({ token });
    } catch (error) {
        return res.json({ msg: 'Error al iniciar sesión' });
    }
};

module.exports = ctrlAuth;