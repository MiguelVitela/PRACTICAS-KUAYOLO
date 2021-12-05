/* Los arreglos son estructuras de datos muy poderosas, no solo podemos acceder y modificar
los elementos de un arreglo, también podemos agregar elementos al arreglo*/


                        // METODO .PUSH()

// Para añadir un elemento al final de un arreglo podemos utilizar el método ".push"
var estacionesAño = ["Primavera", "Otoño", "Invierno"];
estacionesAño.push("Verano");
// console.log(estacionesAño); // Se añadirá verano al final del arreglo.


                        // METODO .POP()

// Este metodo se usa para eliminar el elemento final de un arreglo.
var semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
semana.pop();
// console.log(semana); // Se eliminará el ultimo elemento del arreglo

// El metodo .pop no solo elimina el ultimo elemento de un arreglo , si no también lo puede retornar como vemos a continuación

var alumnos = ["Pedro", "Emiliano", "Cristian", "Erick"];
var funado = alumnos.pop();
// console.log(alumnos); // Solo se imprimirán los primeros 3 elemnetos
// console.log(funado); // Imprimirá "Erick"


                        // METODO .SHIFT()
// Este metodo se utiliza para eliminar el primer elemento de un arreglo.

var diasIngles = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
diasIngles.shift();
console.log(diasIngles); // Se elmimna monday del arreglo.


                        // METODO .UNSHIFT()
// Este método se utiliza para agregar elementoa al principio de un arreglo

var misCrushes = ["Lidia", "Magy", "Pumby", "Ariadna"];
misCrushes.unshift("Emily");
console.log(misCrushes); // Se añade emily al inicio del arreglo
