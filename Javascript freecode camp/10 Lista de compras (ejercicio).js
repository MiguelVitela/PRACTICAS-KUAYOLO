// Escribir un arreglo anidado o multidimencional que represente nuestra lista de compras
var listaCompras = [["melón", 3],["Sandía", 2], ["Pepino", 1], ["Pollo", 4], ["Jamón", 1.2], ["Salchicha", 2.5]];

// Posteriormente formar las siguientes oraciones utilizando los índices de los arreglos.

// Voy a a comprar 4 kilos de pollo.
console.log("Voy a comprar " + listaCompras[3][1] + " kilos de " + listaCompras[3][0] + ".");

// Necesito 3 kilos de melon para el lonche de la semana.
console.log("Necesito " + listaCompras[0][1] + " kilos de " + listaCompras [0][0] + " para el lonche de la semana.");

// Ocupo 2.5 de salchicha, 4 kilos de pollo y 1.2 kilos de jamon para los lonches del muñeco.
console.log("Ocupo " + listaCompras[5][1] + " kilos de " + listaCompras[5][0] + ", " + listaCompras[3][1] + " kilos de " +
listaCompras[3][0] + " y " + listaCompras[4][1] + " kilos de " + listaCompras [4][0] + " para los lonches del muñeco.");