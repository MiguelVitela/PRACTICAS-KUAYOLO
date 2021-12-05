/* Las funciones pueden retornar un valor además de recibir valores */

function sumar(a, b) {
    return a + b;
}

sumar(10, 10); // No muestra el resultado en consola
console.log(sumar(5, 5)); // Muestra el resultado en consola


                // UNDEFINED

/* Asi como se puede retornar un valor de una función con return, también se puede omitir esa sentencia, se puede no retornar
ningún valor de la función pero en ese caso aun asi la funcion retornara un valor por defecto "undefined" 
En otras palabras si no se enuncia un return dentro de la función, por defecto esta retronará UNDEFINED */

function restar(a, b){
    console.log(a - b);
}

console.log(restar(5, 2));//Se imprimirá el resultado de la función y despues "undefined" porque no se estableció un return 
