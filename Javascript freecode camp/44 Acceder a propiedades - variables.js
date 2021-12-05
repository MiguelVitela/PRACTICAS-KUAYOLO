
var resultados = {
    1: "Miguel",
    2: "Ana",
    3: "Ramiro",
    4: "Joaquín",
    5: "Luis"
};

// Para acceder a una propiedad específica de un objeto con una variable se puede hacer  los siguiente.

var posicion = 2;
console.log(resultados[posicion]); // Ana

// O también se puede de la siguiente manera.

var quintoLugar = resultados[5]; // Luis
console.log(quintoLugar);

// NOTA: LO ANTERIOR NO PUEDE SER REALIZADO CON LA NOTACIÓN DE PUNTO, SOLO CON LA NOTACIÓN DE CORCHETES.