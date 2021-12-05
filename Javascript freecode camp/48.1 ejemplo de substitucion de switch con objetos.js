
                // Cambiaremos esta función con sentencia switch por una función con objetos.

function buscarElementoQuimico() {
    var elementoQuimico = " ";
    
    switch (simbolo) {
        case "Al":
            elementoQuimico = "Aluminio";
            break;
        case "S":
            elementoQuimico = "Azufre";
            break;
        case "Cl":
            elementoQuimico = "Cloro";
            break;
        case "He":
            elementoQuimico = "Helio";
            break;
        case "B":
            elementoQuimico = "Boro";
            break;
    }
    return elementoQuimico;
}


// La función con objetos se muestra a continuación.

function elementoQuimico(simbolo) {
var simbolosQuimicos = {
    "Al": "Aluminio",
    "S": "Azufre",
    "Cl": "Cloro",
    "He": "Helio",
    "B": "Boro"
  };

  return simbolosQuimicos[simbolo];
}


// Ambas funciones hacen la misma tarea pero la segunda es más corta y conscisa.