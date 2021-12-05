function seleccionarIdioma(valor){
    var idioma;

    if (valor == 1){
        idioma = "Español";
    } else if (valor == 2){
        idioma = "Francés";
    } else if (valor == 3){
        idioma= "Italiano";
    } else {
        idioma = "Inglés";
    }
    return idioma;
}

//console.log(seleccionarIdioma(3)); // Italiano


// AHOREA USANDO SWITCH

function seleccionarNacionalidad(valor){
    var nacionalidad;
    switch (valor){
        case 1:
            nacionalidad = "Mexicano";
            break;
        case 2:
            nacionalidad = "Francés";
            break;
        case 3:
            nacionalidad = "Italiano";
            break;
        default:
            nacionalidad = "Inglés o Americano";
            break;
    }
    return nacionalidad;
}

console.log(seleccionarNacionalidad(1));