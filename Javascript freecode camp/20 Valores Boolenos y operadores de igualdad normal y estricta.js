                    // BOOLENOS
// Hay 2 valores booleanos true y false
// Es importante escribirlos bien para que no haya errores
var lloviendo =  false;
console.log(lloviendo);

var nevando = true;
console.log(nevando);


                    // OPERADOR DE IGUALDAD ( == )
console.log(5 == 3); // Evaluará a verdadero o falso
console.log("hola" == "hola"); // También su pueden comparar strings

/* Cuando el operador de igualdad se aplica a los arrays no compara los elemntos de este si no que compara si los arrays
en la memoria representan el mismo onjeto por lo que no se debe de vomparar arrays con el operador de igualdad, un ejemplo
se muestra a continuación*/

console.log([1, 2, 3] == [1, 2, 3]); // False 



                        // OPERADOR DE IGUALDAD ESTRICTA ( === )

// El operador de igualdad estricta permite coomparar si ambos tipos de datos son los mismos.

console.log(5 == 5); // True
console.log(5 == "5"); // True

console.log(5 === 5); // True
console.log(5 === "5"); // False

// NOTA: Si se quiere comparar también el tipo de dato se debe usar el OPERADOR DE IGUALDAD ESTRICTA (===)
