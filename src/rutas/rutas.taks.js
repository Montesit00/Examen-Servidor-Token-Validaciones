const router = require('express').Router();
const { createTask,getTaskID, getTask, putTask } = require('../controllers/control.taks');

const validarJWT = require('../middlewares/validar-jwt');

router.post('/task', [
    validarJWT,
], createTask);

router.get('/task/:idTask',getTaskID);

router.get('/mostrartarea', [
    validarJWT
], getTask);

router.put('/actualizartarea/:id',[
    validarJWT
],putTask)


module.exports = router;