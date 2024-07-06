//1. Importamos los modulos o dependencias que necesitemos.
import { productModel } from "../models/produtsModels";

//Prueba inicial de mis controladores

//Peticion GET -> se muestra los productos
export const getProducts = async(req, res) =>{
    return res.send("Funciono la peticion GET");
}

//Peticion POST -> me crea los productos
export const postProducts = async(req, res)=>{
    return res.send("Funciona la peticion POSt")
}

//Peticion DELETE -> me elimina los productos
export const deleteProductsById = async(req, res)=>{
    return res.send("Funciona la peticion DELETE")
}

//Peticion PUT -> me actualiza los productos
export const putProductsById = async(req, res)=>{
    return res.send("Funciona la peticion PUt")
}