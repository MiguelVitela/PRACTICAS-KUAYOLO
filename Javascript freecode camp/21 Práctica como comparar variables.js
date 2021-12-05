var a = 5;
var b = 5;

console.log(a == b); // True
console.log(a === b); // True

b = 8;

console.log(a == b); // False
console.log(a === b); // False

b = "5"; 

console.log(a == b); // True
console.log(a === b); // False

a = "JavaScript";
b = "JavaScript";

console.log(a == b); // True
console.log(a === b); // True