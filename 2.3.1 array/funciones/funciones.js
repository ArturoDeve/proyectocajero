/* edeclaro mi funcion */

function imprimirnumeros (){

    console.log("1");
    console.log("2");
    console.log("3");

}

/*  la mando a llamar */
imprimirnumeros ()


/* funcion con parametros */

function sumaconsole (num1,num2){
    console.log(num1+num2);

}


function sumareturn (num1,num2){
    return num1+num2
    
}   


sumaconsole(6,6)
console.log(sumaconsole(5,7));  /* undefine */

console.log(sumareturn(4,4));

/* ORDEN DE LOSPAAMETROS */

function saludar ( nombre, primeroapellido){

    console.log("hola soy" + nombre + " " + primeroapellido);

}
saludar (" juarez ", " arturo ")

/* funciones de alto orden
dunciones que reciben como paremtro otras funciones
o las utilizan dntro de su definicion */


/* funcion principal*/

function operacionmatematica (num1,num2,operacion){
    return operacionma (num1,num2)

}

/* funcion que manda como parametro */
function suma (num1,num2){
    return num1+num2

}

function resta (num1,num2){
    return num1 - num2
    

}


console.log(operacionmatematica (7,14 + suma))


/* ------------------------------------------------------
funciones flecha
 */
const saludarflecha = (nombre,papellido) =>{
    console.log(" hola soy " + nombre + " " + papellido);
}
saludarflecha ("juan", "martinez")

/* otro ejemplo  quitando llaves */

const sumaflecha = (num1, num2) => num1 + num2

console.log(sumaflecha (2,2))

/* eje,plo con parametro isn llaves ssis es nombre y apellido lleva parentesis */
 const saludocorto = nombre  => {
    console.log("hols soy "+ nombre)
 }
 saludocorto ("rosendo")