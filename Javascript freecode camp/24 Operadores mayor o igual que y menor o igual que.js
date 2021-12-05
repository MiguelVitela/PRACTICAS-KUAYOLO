/* Este tipo de operadores incluyen el saso en el que ambos valores sean iguales.
(>=) mayor o igual que  |  (<=) menor o igual que */

// (>=) mayor o igual que
// console.log(5 > 5); // false
// console.log(5 >= 5); // true

// (<=) menor o igual que
// console.log(5 < 6); //true
// console.log(5 <= 5); //true

// También funcionan comparando strings

console.log("A" <= "A"); // true
console.log("AB" >= "A"); // true
console.log("ABC" >= "ACB"); // false
console.log("HOLA" >= "HOLA"); // true
console.log("FUEGO" <= "AEROPLANO"); // false