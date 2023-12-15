





let alumnos = ("Arturo, Alan, Polo, Flor");
let alumnosarreglos = alumnos.split( , );
console.log(alumnosarreglos);


/* let copiafrutas = [...frutas]; */ /*  copia fruas */


let copiafrutas  = ( "arreglo original" + frutas);

/* slice crewa una copia de un arreglodesde el inicio al valor final -1 */

let copiafrutas = frutas.slice ( 2,4);
console.log = (copiafrutas);


/* utilizando splice para agregar elementos */

let copiafrutas = ( "arreglo original" + frutas);
let copiafrutas2 = [...frutas];
copiafrutas2.splice ( 3, 1, "aguacate", "uva");
console.log("arreglo con agregado" +copiafrutas2);

/* utilizando splice para quitar elementos */
console.log("arreglo original" + frutas);
let copiafrutas3 = [...frutas] 
copiafrutas3.splice (3, 1);
console.log("arreglo que elimina" +copiafrutas3);

/* sort ordena de forma ascendente A-Z */

let numeros = [2, 8, 3, 6, 5, 7]
console.log(numeros.sort ());

console.log(numeros.sort (function)(a, b) [return a-b] );
/* reverse ordena alreves */



/* CONCAT une dos listas o cadenas */
 
let verduras = ["cebolla", "papa", "zanahoria"];

let frutas = ["manzana", "melon"];

