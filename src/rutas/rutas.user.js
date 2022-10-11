const router= require('express').Router();

const {
    getHome,
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

// Crear nuevo usuario
router.post('/user', [
    validarJWT
], postHome);

// Editar usuario, requiere ID de usuario
router.put('/user/:id', [
    validarJWT
], putHome);

// Eliminar usuario, requiere ID de usuario
router.delete('/user', [], deleteHome);

module.exports = router;