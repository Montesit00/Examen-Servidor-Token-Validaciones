const router = require('express').Router();
const { createTask, getTask } = require('../controllers/control.taks');

const validarJWT = require('../middlewares/validar-jwt');

router.post('/task', [
    validarJWT,
], createTask);


router.get('/task', [
    validarJWT
], getTask);

module.exports = router;