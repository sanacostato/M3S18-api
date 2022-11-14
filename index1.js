// const express = require('express');
// const cors = require('cors');

// //express en la variable server
// const server = express();
// // usamos el middelware de cors que importamos antes
// server.use(cors());
// // usamos el middelware de expres.json para poder leer los datos que envain en el body
// server.use(express.json());
// const PORT = 3000;

// let peliculas = [
//     {nombre: "harry potter", año:"2010", actor: "Daniel", duracion:"2 horas"},
//     {nombre:"fast and furious", año:"2015", actor:"ven", duracion:"1 hora y 30 min"}
// ]
// server.get("/", (request, response)=>{
//     response.send("API Peliculas")
// });
// server.get("/peliculas", (request,response)=>{
//     response.json(
//         {
//             data: peliculas
//         }
//     );
// });

// server.listen(PORT,()=>{
//     console.log("iniciando en 3001")
// })