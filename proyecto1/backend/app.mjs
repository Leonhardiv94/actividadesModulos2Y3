//1. Importamos las dependecias y modulos que necesitamos.
import express from "express";
import dotenv from "dotenv";
//Variables de entorno -> nos gusrdan informacion delicada
import connectionMongo from "./config/db.mjs";

//2. Comfigurrar el uso de nuestro servidor y nuestras variables de:
const app = express(); //configuramos nuestro servidor
dotenv.config(); //configuramos nuestras variables de entorno
const port = process.env.PORT;

//conectese a la base de datos
connectionMongo();

//Prueba
app.get(`/`, (req, res)=>{
    res.send("Hola, peticion a seridor");
});

//3. Escuchar nuestro servidor. (ejecutarlo)
app.listen(port, ()=>{
    console.log(`El servidor se esta escuchando en: http://localhost:${port}`);
});