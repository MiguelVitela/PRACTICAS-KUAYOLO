
// Utilizar un objeto para reemplazar la sentencia switch usada a continuación

function buscarElementoQuimico(simbolo) {
var simbolosQuimicos = {
    "Al": "Aluminio",
    "S": "Azufre",
    "Cl": "Cloro",
    "He": "Helio",
    "B": "Boro"
  };

  return simbolosQuimicos[simbolo];
}

console.log(buscarElementoQuimico("Al"));
console.log(buscarElementoQuimico("S"));
console.log(buscarElementoQuimico("Cl"));
console.log(buscarElementoQuimico("He"));
console.log(buscarElementoQuimico("B"));