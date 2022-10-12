const router= require('express').Router();

const {
    getHome,
    getUserID,
    putHome,
    postHome, 
    deleteHome
} = require('../controllers/control.user')

const esAdmin = require('../middlewares/es-admin');
const validarJWT = require('../middlewares/validar-jwt');

router.get('/user',[
    validarJWT,
    esAdmin
] ,getHome);

//Obtener usuario por id
router.get('/user/:idUser',getUserID);

// Crear nuevo usuario
router.post('/user', [], postHome);

// Editar usuario, requiere ID de usuario
router.put('/user/:id', [
    validarJWT
], putHome);

// Eliminar usuario, requiere ID de usuario
router.delete('/user/:id', [validarJWT], deleteHome);

module.exports = router;