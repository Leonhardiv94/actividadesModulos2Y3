//1. Importar las dependencias necesarias.
import mongoose from "mongoose";

const connectionMongo = async()=>{
    //conexion base de datos
    await mongoose.connect(process.env.CONEXION_DB,{})
    //control de errores -> try -catch
    try{
        console.log("conexion exitosa con base de datos");
    }catch(console){
        console.error("Error de conexion: ", error.message);
    }
}

export default connectionMongo;