
                // OPERADOR NOT (!X) == Signo de exclamación colocado antes de la expresión que se quiere negar

/* 
    TABLA DE VERDAD DEL OPERADOR AND
    Para: X !X Y

    |  X  |  !X |
    -------------
    |  T  |  F  |
    |  F  |  T  |

El operador NOT se utiliza para negar el valor verdadero de otra expresión */

console.log(!false); // true
console.log(!true);  // false

// Ejemplo de uso

var x = 9;
console.log(!(x < 7)); //true                    NOTA: No debe haber espacios despues del "!"
console.log(!((x < 4) && (x > 14))); // true     NOTA: Cuidado con los paréntesis 