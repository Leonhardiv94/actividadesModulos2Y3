//1. Importamos las dependecias y modulos que necesitamos.
import express from "express";
import dotenv from "dotenv";
//Variables de entorno -> nos gusrdan informacion delicada

//2. Comfigurrar el uso de nuestro servidor y nuestras variables de:
const app = express(); //configuramos nuestro servidor
const port = process.env.PORT;
dotenv. config(); //configuramos nuestras variables de entorno

//3. Escuchar nuestro servidor.
app.listen(port, ()=>{
    console.log("Estoy funcionando");
});