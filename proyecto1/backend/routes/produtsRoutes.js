//Importaciones
import express from "express"
//Importar nuestros controladores
import { getProducts, postProducts, deleteProductsById, putProductsById } from "../controllers/productsControllers";

//configuramos el Router de express
const productsRouter = express.Router();

//Definimos nuestras rutas

//Ruta para la peticion GET
//Primero, determino la ruta y luego le digo que es lo que tiene que hacer.
productsRouter.get("/obtenerProductos",getProducts);

//ruta para la peticion POST    
productsRouter.post("/crearProductos",postProducts);

productsRouter.delete("/eliminarProductos/:_id",deleteProductsById);

productsRouter.put("/actualizarProductos/:_id",putProductsById);

//Exportamos 
export default productsRouter;