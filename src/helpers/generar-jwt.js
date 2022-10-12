const jwt = require('jsonwebtoken');

//funcion para generar el token
//se le pasa el uid de usuario 
const generarJWT = (uid) => {
    return new Promise((resolve, reject) => {
        // Se genera el token con el id del usuario y la palabra secreta
        //la palabra secreta(SECRET) se la escribe en el archivo .env
        jwt.sign(uid, process.env.SECRET, {
            expiresIn: '5h' //poner limite de tiempo al token
        }, (err, token) => {
            if(err){
                reject('No se pudo generar el token');
            }

            resolve(token);
        })
    })
}


module.exports = generarJWT;