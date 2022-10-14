# Repositorio Examen

Para ejecutar el proyecto, se debe tener instalado **Node.js** y **npm**.

Utilizar versión LTS (Recomendado)
#### Para instalar las dependencias que necesita este proyecto, ejecutar el siguiente comando:
npm install

#### Para ejecutar el proyecto, ejecutar el siguiente comando:
npm run dev

#### Para ejecutar el proyecto en modo producción, ejecutar el siguiente comando:
npm start

# Uso:
### Lo ideal para comenzar es registrarte como usuario:
#### HTTP: **POST**-> http://localhost:5000/user

- *=> requiere del siguiente body:*

	> {

"username":"muestra",

"password":"muestra12",

"email": "muestra@gmail.com"

}
### El siguiente paso sería iniciar sesión para acceder a las funciones:
Aqui no se ingresa el email solo "username" y "password"
#### HTTP: **POST** -> http://localhost:5000/login
- *=> requiere del siguiente body:*
	> {

"username":"ingresesuusuarioyaregistradoanteriormente",

"password":"ingresesucontraseñayaregistradaanteriormente"

}

##  Una vez reciba el Token, cópielo y uselo como header Authorization en su cliente y así acceder a las funciones:
En este caso se neceista el url del put + la id del usuario
#### HTTP: **PUT**=> http://localhost:5000/user/:idusuario

- **=> requiere del siguiente body:**
> {

"username":"muestra21",

"password":"muestra21",

"email": "21muestra@gmail.com"

}

#### HTTP: **GET** =>http://localhost:5000/user
* Sirve para ver la información de tu cuenta.
#### HTTP: **DELETE**=> http://localhost:3000/user
* En caso de que  quieras eliminar la cuenta

## Funciones de Tareas con el Token:
Aqui seguiremos usando el mismo token del anterior usuario en caso de que no lo hallá eliminado
#### HTTP:**POST** => http://localhost:5000/task
- **=>requiere del siguiente body**
>{

"titulo":"prueba1",

"descrip":"prueba examen2"
}
#### HTTP: **PUT**=> http://localhost:5000/actualizartarea/:idtask
Aqui necesita el id de la tarea que se le dio al crea la anterior tarea(prueba1)
- **=>requiere del siguiente body**
> {

"titulo":"pruebaa1",

"descrip":"pruebaexamen2"

}

#### HTTP: **GET** =>http://localhost:5000/mostrartarea
* Sirve para ver la información de tus tareas.
#### HTTP:**DELETE** =>http://localhost:5000/eliminartarea/:id
* Para eliminar una tarea:
  * :idTarea hace referencia al "_id" de la tarea a completar



