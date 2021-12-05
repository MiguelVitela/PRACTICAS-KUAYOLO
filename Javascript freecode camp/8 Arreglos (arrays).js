// Para hacer un array se deven insertar los datos dentro de [ ]

var miArrglo = ["Miguel", 7];
console.log(miArrglo);

var estudiantes = ["Juan", "Rodrigo", "Ramiro", "Daniel", "Oscar"]; // Cada elemento se separa de otro por una coma y un espacio
console.log(estudiantes);

var notas = [9, 8, 7, 10, 9, 8];
console.log(notas);


                        // ARREGLOS ANIDADOS
// Un arreglo anidado es cuando se crean arreglos dentro de un arreglo principla como se observa a continuación:

var calificaciones = [["Miguel", 9], ["Adrián", 8], ["Jesús", 10]];
console.log(calificaciones);

var listaPrecios = [["short", 10, "4517"], ["Tv smart", 5000, "8456"], ["Laptops", 9250, "4789"]];
console.log(listaPrecios);

var datos = [[5.2, 45.3, 48.3], [23.1, 14.36, 74.21], [45.1, 7.4, 9.1]];
console.log(datos);


                        // ACCEDER A LOS ELEMENTOS DE UN ARREGLO
var miArray = [12.4, 41.23, 78];
console.log(miArray[1]); // 41.23


                        // SUMAR ELEMENTOS DE UN ARRAY
var sumaArray = miArray[0] + miArray[1] + miArray[2];
console.log(sumaArray);


                        // MODIFICAR ELEMENTOS DE UN ARREGLO
// Como los arreglos son mutables, a diferencia de las cadenas de texto aqui si podemos cambiar un elemento del arreglo.
var array = [10, 20, 40];
array[1] = "Miguel";
console.log(array);

// También aplica con arreglos anidados
var anidado = [10, "Juan", 147.235];
anidado[2] = ["Pablo", 15, 1.78];
console.log(anidado);


                        // ACCEDER A ARREGLOS MULTIDIMENSIONALES
// También se puede acceder a arreglos anidados o multidimencionales.
// El primer número indica el arreglo anidado y el segundo numero entew [ ] indica la posicion del elemento en el arreglo anidado

var arrayMultidimensional = [[45, 56, 78], ["María", "Paulina", "Emily"], [1.45, 1.71, 1.64]];
console.log(arrayMultidimensional[1][2]); // Imprimirá Emily en consola
console.log(arrayMultidimensional[2][1]); //1.71