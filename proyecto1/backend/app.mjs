//1. Importamos las dependecias y modulos que necesitamos.
import express from "express";
import dotenv from "dotenv";
//Variables de entorno -> nos gusrdan informacion delicada

//2. Comfigurrar el uso de nuestro servidor y nuestras variables de:
const app = express(); //configuramos nuestro servidor
dotenv.config(); //configuramos nuestras variables de entorno
const port = process.env.PORT;

//3. Escuchar nuestro servidor. (ejecutarlo)
app.listen(port, ()=>{
    console.log(`El servidor seesta escuchando en: http://localhost:${port}`);
});