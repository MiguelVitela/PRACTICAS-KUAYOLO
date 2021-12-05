/* Las sentencias switch nos permiten escribir código similar al de un condicional pero switch nos permite a partir de una
expresión o valor decidir que va a pasar en base a ese valor. */

function clasificarValor(valor) {
    var respuesta;
    switch (valor) {
        case 1:
            respuesta = "alpha";
            break;
        case 2:
            respuesta = "beta";
            break;
        case 3:
            respuesta = "gamma";
            break;
        case 4:
            respuesta = "delta";
            break;
    }
    return respuesta; // Se retorna el valor fuera de la sentencia switch pero dentro de la función.
}
console.log(clasificarValor(1)); // alfa
console.log(clasificarValor(2)); // beta
console.log(clasificarValor(3)); // gama
console.log(clasificarValor(4)); // delta


// TAMBIÉN SE PUEDE USAR SWITCH CON UNA CADENA DE CARACTERES

var producto = "Hamburguesa";

switch (producto) {
    case "Pizza":
        console.log("La pizza básica cuesta $79");
        break;
    case "Hamburguesa":
        console.log("La hamburguesa sencilla cuesta $30");
        break;
    case "Helado":
        console.log("La malteada sencilla cuesta $20");
}

/* TAMBIEN PODEMOS AGREGAR UNA OPCION PREDETERMINADA A LA SENTENCIA SWITCH QUE ES SU EQUIVALENTE A LA CLAUSULA ELSE EN UN 
CONDICIONAL*/