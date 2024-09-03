//importamos mongoose -> Schema -> plantilla de los productos
import mongoose from "mongoose";
const schema = mongoose.Schema;
//estructurando como se guardara la informacion de los productos en nuestra bd
const productSchema = new schema({
    nombre:{
        type: String,
        require: true
    },
    imagen:{
        type: String,
    },
    precio:{
        type: Number,
        require: true
    }
});

//Utilizamos esa plantilla para crear nuestro modelo -> creamos la coleccion donde van a guardar los datos.
//mongoose.model() -> crear modelo
//1. nombre de la coleccion que va a guardar los datos
//2. necesitamos darle como parametro el Schema que hicimos
export const productModel = mongoose.model("usuario", productSchema);
