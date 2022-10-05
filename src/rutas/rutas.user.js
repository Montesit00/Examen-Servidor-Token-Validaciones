const routerUser = require('express').Router();

const {
    getHome,
    putHome,
    postHome,
    deleteHome
} = require('../controllers/control.user')

routerUser.get('/usuarios',getHome)
routerUser.put('/usuarios',putHome)
routerUser.post('/usuarios',postHome)
routerUser.delete('/usuarios',deleteHome)

module.exports = routerUser;