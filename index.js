//Conexiones
const path = require('path');
const express = require('express');
const conectDb = require('./src/conexion/conexion.bd');


const dato = express();
conectDb();

dato.use(express.json());

//Uso los datos de los otros archivos
dato.use(require('./src/rutas/rutas.user'))
dato.use(require('./src/rutas/rutas.taks'))

//recurso estatico
dato.use(express.static(path.join(__dirname, "public")))

//Compruebo si funciona el servidor
dato.listen(3000,()=>{
    console.log('Funciona')
})