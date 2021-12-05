
/* PRÓXIMO EN LA FILA 

En informática una cola (queue) es una estructura de datos obastracta en la cual los elementos se mantienen en orden.
Los nuevos elementos se pueden añadir al final de la cola y los elementos previos se retiran del principio de la cola.

Define una función proximoEnFila que tome un arreglo y un número como argumentos. Agrega el número al final del arreglo
y luego elimina el primer elemento del arreglo. La función proximoEnFila debe retornar el elemento que fué removido.*/

function proximoEnFila(array, elemento){
    array.push(elemento); // Se agrega un elemento al final de la fila
    return array.shift(); // Se elimina el primer elemento de la fila
}

var miArray = [1, 2, 3, 4, 5];  // Array de prueba

console.log("Antes: " + JSON.stringify(miArray)); // Se muestra el array antes de la fnción JSON.stringify es para ver mas bonitos los arrays

console.log(proximoEnFila(miArray, miArray[4] + 1)); // Se declara la función acompañada de un console log para ver resultado del que va a la fila

console.log("Después: " + JSON.stringify(miArray)); // Se observa la fila actualizada después de la llamada a la función.