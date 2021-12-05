function proximoEnFila(array, elemento){
    array.push(elemento); // Se agrega un elemento al final de la fila
    return array.shift(); // Se elimina el primer elemento de la fila
}

var fila = [55, 56, 57, 58, 59, 60];

var posFila = proximoEnFila(fila, fila[5] + 1);
console.log("Pase el número " + posFila + " a la fila");  // numero 55 pase

var posFila = proximoEnFila(fila, fila[5] + 1);
console.log("Pase el número " + posFila + " a la fila");  // numero 56 pase


