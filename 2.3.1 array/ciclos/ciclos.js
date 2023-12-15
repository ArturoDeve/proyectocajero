/* alert ("ciclos"); */

/* imprimir valores del 1 al 10 */

let i = 1 ;
while(i < 11){
    console.log(i);
    1++;  /* resultados es i = i+1 */

}

console.log("despues del while");


/* ciclo do-while */

i = 12 ;
console.log("antes del do while");
do {

    /* codigo a ejecutar */
    console.log(i);

}
while ( i < 11);
console.log("despues del do-while");




/* ejemplo */

let = 1;
let = 8;

do {
    numero = prompt ( "en que numero estoy pensando ?");

}
while (numero != respuesta);



/* ciclo for */
    console.log("antes del for");

for ( let j = 0; j < 21 ; j++){

    console.log(j);
    
}
    console.log("despues del for");

    /*  los incrementow no son forzosamente de 1 en 1 */
    /* este ejemplo aumenta de 2 en 2 */

    console.log("antes del for de 2 en 2");

for ( let j = 0; k = 10; j < 21 && k < 15 , j+= 2, k++){

    console.log("j:" +j);
    console.log("k:" +k);
    
}
    console.log("despues del for de 2 en 2");




    /* ejemplo con for */

    const frutas = ["manzana", "pera", "melon", "sandia"];
for  ( i = 0; frutas < 0; i++ ){
    console.log(frutas[i]);


}