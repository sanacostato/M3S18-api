const express = require('express');
const cors = require('cors');

//express en la variable server
const server = express();
// usamos el middelware de cors que importamos antes
server.use(cors());

//importamos el dor.env
require('dotenv').config();

// usamos el middelware de expres.json para poder leer los datos que envain en el body
server.use(express.json());

//ponemos el puerto en una constante,esta va aen mayuscula. y eso va por la carpeta de .env
const PORT = process.env.PORT;

// CREAMOS UN array de objetos para simular una base de datos
let platillos = [
    {nombre: 'Tacos', precio : 50},
    {nombre: "Mole", precio: 100}
]
//verbos http
/* 
GET: OBTENER DATOS
POST: crear datos o realizar un proceso en servidor
PUT: actualizar Datos
DELETE: borrar datos
*/
// creando el endpoint(URL) principal de la api
server.get("/", (request,response)=>{
    response.send("API V1.0");
});
// asi optenemos todos los platillos en el endponitn
server.get("/platillos", (request,response)=>{
    response.json(
        {
            data: platillos,
            count: platillos.length,
            mensaje: "platillos obtenidos correctamente"
        }
    );
});
// creando endpoint para agregar un platillo
server.post("/platillos", (request,response)=>{
    // el if es para hacer euq el platillo debe tener un nombre el ! es de negacion 
    const platillo = request.body;
   if (!platillo.nombre) {
    return response.status(400).json({mensaje:"el platillo debe tener un nombre"});
   }
      // como lo agrego al array con push
   
   platillos.push(platillo);
   
    response.json(
        {
            data: request.body,
            mensaje: "entro a la funcion de agregar platillo"
        }
    );
});

let peliculas = [
    {nombre: "harry potter", año:"2010", actor: "Daniel", duracion:"2 horas"},
    {nombre:"fast and furious", año:"2015", actor:"ven", duracion:"1 hora y 30 min"}
]
server.get("/", (request, response)=>{
    response.send("API Peliculas")
});
server.get("/peliculas", (request,response)=>{
    response.json(
        {
            // data: peliculas, se puede hacer asi o como abajo para que indique el index, para editar mas facil ... es el spedd operator
            data: peliculas.map((pelicula, index)=>{
                return{index, ...pelicula};
            })
        }
    );
});
server.post("/peliculas", (request, response)=>{
    const pelicula = request.body;
    if (!pelicula.nombre) {
        return response.status(400).json
        ({mensaje:"la pelicula debe contener un nombre"});
    }
    peliculas.push(pelicula);

    response.json(
        {
            data: request.body,
            mensaje:"entro a agragar pelicula"
        }
    );
});


server.put("/peliculas/:index", (request, response)=>{
    //sacamos el indice  el parametro de la url
const {index} = request.params;
//sacamos la pelicula del body
const pelicula = request.body;
//accedemos al elemento del array y actualizamos
peliculas[index] = pelicula;
    response.json(
        {
            data: index,
            mensaje:"se actualizo pelicula"
        }
    );
});
server.delete("/peliculas/:index", (request, response)=>{
    //sacamos el indice  el parametro de la url
const {index} = request.params;
peliculas.splice(index,1);
    response.json(
        {
            data: index,
            mensaje:"se elimino pelicula"
        }
    );
});
//iniciamos el servidor de express..... para abrir el servidor inicial /, seria poner localhost:3000, eso por el puerto de abajo
server.listen(PORT,() =>{
    console.log("servidor iniciando puerto 3000");
});