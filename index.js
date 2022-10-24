//Conexiones
const express = require('express');// importo librerias 
const cors = require('cors');
const morgan = require('morgan');

const conectDb = require('./src/conexion/conexion.bd');//importo la funcion con la bd
require('dotenv').config();

//inicializaciones
const dato = express(); //inicializo la libreria express
conectDb();//inicializo la funcion

//configuraciones
const port = process.env.PORT

//middlewares: son servicios de terceros / servicios que se ejecutan antes de realizar una peticion
dato.use(cors());
dato.use(morgan('dev'));
dato.use(express.json());//para que el servidor comprenda los archivos en formato de json

//Uso los datos de los otros archivos/ importacion de rutas
dato.use(require('./src/rutas/rutas.user'))
dato.use(require('./src/rutas/rutas.taks'))
dato.use(require('./src/rutas/rutas.auth'))

//Compruebo si funciona el servidor
dato.listen(port,()=>{
    console.log('Funciona')
})