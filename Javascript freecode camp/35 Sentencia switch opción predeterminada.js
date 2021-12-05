/* TAMBIÉN SE PUEDE AÑADIR UNA OPCION PREDETERMINADA A LA SENTENCIA SWITCH.

Esa opción se ejecutará con la palabra reservada ("defualt") si nunguna 
de los valores es el valor de la variable o de la expresión*/

function seleccionarIdioma(valor) {
    var idioma;
    switch(valor) {
        case 1:
            idioma = "Español";
            break;
        case 2:
            idioma = "Francés";
            break
        case 3:
            idioma = "Inglés";
            break;
        default:  // con la instrucción default se crea ese ultimo caso del switch
            idioma = "Italiano";
        break;
    }
    return idioma;
}

console.log(seleccionarIdioma(1)); // español
console.log(seleccionarIdioma(2)); // frances
console.log(seleccionarIdioma(3)); // ingles
console.log(seleccionarIdioma(4)); // italiano
console.log(seleccionarIdioma(5)); // italiano