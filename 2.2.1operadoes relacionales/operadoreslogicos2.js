/* operadoreslogicos  && and, || or , ! not */

let  a = true;
let b = false;
let c = 5<10 ; /* true */


console.log("a && b");/* false    recuerda en && deben ser todos verdadeors*/  
console.log("a && c");/* true  recuerda en && deben ser todos verdadeors o sera falso*/
console.log("a || c");/* true recuerda en || deben ser todas falsas si no sera verdadero*/
console.log("!a");/* false contrario */
console.log("!b");/* true */


/*  cuando usamos el mismo operador la evaluacion se hace de izquiera a derecha */
let ejemplo 1 =
let ejemplo 2 =
let ejemplo 3 = 


/* jerarquia de operadores */
/* not evalua primero os falsos */
/* andtiene mayor jerarquia que or */
/* al final evalua operadores or */

let ejemplo4 = !true && false || true ; // true


/* verifica parentesis */
/* evalua el not */
/* evalua el and */
let ejemplo 5 = !true ( false || true);

