// EN LA SENTENCIA SWITCH TAMBIÉN PODEMOS ESCOGER EJECUTAR UN CÓDIGO ESPECÍFICO PARA VARIOS VALORES

function clasificarVolumen(valor) {
    var volumen;
    switch (valor) {
        case 1:
            volumen = "Bajo";
            break;
        case 2:
        case 3:
            volumen = "Medio";
            break;
        case 4:
        case 5:
        case 6:
            volumen = "Alto";
            break;
    }
    return volumen;
}

console.log(clasificarVolumen(1)); // bajo
console.log(clasificarVolumen(2)); // medio
console.log(clasificarVolumen(3)); // medio
console.log(clasificarVolumen(4)); // alto
console.log(clasificarVolumen(5)); // alto
console.log(clasificarVolumen(6)); // alto