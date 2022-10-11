const { iniciarSesion } = require('../controllers/control.auth');

const router = require('express').Router();

router.post('/login', iniciarSesion )


module.exports = router;