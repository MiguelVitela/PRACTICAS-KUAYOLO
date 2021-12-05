// Los operadores lógicos nos permiten conbinar distintas expresiones para formar condiciones más elaboradas.

                            // OPERADOR AND (&&)

/* 
    TABLA DE VERDAD DEL OPERADOR AND
    Para: X && Y

    |  X  |  Y  |  X && Y  |
    ------------------------
    |  T  |  T  |    T     |
    |  T  |  F  |    F     |
    |  F  |  T  |    F     |
    |  F  |  F  |    F     |

La expresión solo es verdadera cuando ambos operandos son verdaderos */


var x = true;
var y = false;
console.log(x && y); // false

var a = true;
var b = true;
console.log(a && b); // true

// Ejemplo de uso 

var valor = 10;
console.log((valor > 9) && (valor < 5)); // false

console.log((valor > 9) && (valor < 15)); // true
