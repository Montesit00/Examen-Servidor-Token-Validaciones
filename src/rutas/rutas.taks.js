const routerTask = require('express').Router();

const {
    getTarea,
    putTarea,
    postTarea,
    deleteTarea
} = require('../controllers/control.taks')

routerTask.get('/tarea',getTarea)
routerTask.put('/tarea',putTarea)
routerTask.post('/tarea',postTarea)
routerTask.delete('/tarea',deleteTarea)

module.exports = routerTask;