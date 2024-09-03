// en typescript -> tenemos algo que se llama observador
// obervable -> nos permite que se este ejecutando el codigo
// todo el tiempo ----> "tsc --watch archivo.ts"
// despues para observar al js ----> "node --watch archivo.js"


console.log("probando el watchin");
console.log("hola, soy typescript");

var miNumero : number;
miNumero = 29;
console.log(miNumero + miNumero);

var numeros : number;
numeros = 1000;
console.log(numeros);

let desconocido : unknown;
let cualquiera : any;

desconocido = "alguno por ahi";
cualquiera = ["pedro","maria","jose"];

let miObjeto : {
    marca: string;
    torque: number;
    vendido: boolean
};

miObjeto = {
    marca : "Dacia",
    torque : 110,
    vendido : true
}

function miFuncion(){
    console.log("Hola, soy una funcion");
}

miFuncion();

const miFuncion1 = () => {
    console.log("Soy funcion flecha en realidad");
}