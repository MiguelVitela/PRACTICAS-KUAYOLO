/* Cuando una función retorna un valor podemos asignar ese valor retornado a una variable */

function sumar(a, b) {
    return a + b;
}

var resultado = sumar(5, 5);
console.log(resultado); // 10

// También podemos asignar un return con cadena de caracteres a una variable.

function miFrase(lenguajeProgramacion){
    return("Quiero aprender " + lenguajeProgramacion + " para que me paguen");
}
var fraseCompleta = miFrase("JavaScript");  
console.log(fraseCompleta); // Quiero aprender JavaScript para que me paguen