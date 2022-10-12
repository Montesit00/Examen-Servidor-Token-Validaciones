const router = require('express').Router();
const { createTask,getTaskID, getTask, putTask, deleteTask } = require('../controllers/control.taks');

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


router.delete('/eliminartarea/:id',[
    validarJWT
],deleteTask)


module.exports = router;