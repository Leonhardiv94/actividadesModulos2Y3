//1. Importamos los modulos o dependencias que necesitemos.
import { productModel } from "../models/productsModels.mjs";

//Prueba inicial de mis controladores

//Peticion GET -> se muestra los productos
export const getProducts = async(req, res) =>{
    //return res.send("Funciono la peticion GET");
    //manejo de errores
    try{
        //products -> arreglo
        let products = await productModel.find();
        //validacion en el caso de que no encuentre nada
        if(!products.length === 0){
            //404 -> no se encontro lo que se estaba buscando
            return res.status(404).json({message:"no se encontraron productos"});
        }
        //200 -> todo ok
        return res.status(200).json({message:"todo esta bien"}).send(products);

    }catch(error){
        //500 -> error inesperado en el servidor
        return res.status(500).json({message:"error de servidor" + error.message});
    }
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