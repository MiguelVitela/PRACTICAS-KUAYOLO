
                           // OPERADOR OR (||)

/* 
    TABLA DE VERDAD DEL OPERADOR AND
    Para: X || Y

    |  X  |  Y  |  X && Y  |
    ------------------------
    |  T  |  T  |    T     |
    |  T  |  F  |    T     |
    |  F  |  T  |    T     |
    |  F  |  F  |    F     |

La expresión es verdadera cuando alguno de los dos operandos o ambos son verdaderos. */

var x = true;
var y = false;
console.log(x || y); // true

var a = false;
var b = false;
console.log(a || b); // false

// Ejemplo de uso 

var valor = 15;

console.log((valor > 12) || (valor < 14)); // true
console.log((valor > 19) || (valor < 10));  // false