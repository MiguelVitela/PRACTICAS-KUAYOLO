
// Se debe verificar si un objeto tiene o no una propiedad antes de usarla

var noviaPerfecta = {
    "Ojos": "Azules",
    "Estatura": "1.65 metros",
    "Piel": "Blanca",
    "Cabello": "Rubio"
};

// console.log(noviaPerfecta.hasOwnProperty("Ojos")); // true porque si existe esa propiedad
// console.log(noviaPerfecta.hasOwnProperty("voz")); // false porque no eciste esa propiedad
 
// Lo anteriormente hecho resulta sumamente util para condicionales como lo podemos ver en el siguiente ejemplo

function verificarPropiedad(objeto, propiedad){
    if (objeto.hasOwnProperty(propiedad)) {
        return "Valor de la ropiedad: " + objeto[propiedad];
    } else {
        return "El objeto no tiene propiedad";
    }
}

console.log(verificarPropiedad(noviaPerfecta, "Cabello"));
console.log(verificarPropiedad(noviaPerfecta, "Nacionalidad"));

/* LO ANTERIOR DE REVISAR SI UN OBJETO TIENE UNA PROPIEDAD ES MUY UTIL PUES NOS GARANTIZA QUE NUNCA RECIBIEREMOS UN 
"UNDEFINED" COMO VisualViewport.*/