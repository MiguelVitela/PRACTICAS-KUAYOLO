/* No tadas las variables pueden usarse en las distintas partes del programa, hay 2 principales 
tipos de variables.

Variables globales: Variable que se puede usar en cualquier lugar del programa porque está definida en el programa principal
y no dentro de una función*/


// EJEMPLO DE VARIABLE GLOBAL
var variableGlobal = 5;
console.log(variableGlobal); // Primera impresión

 function ejemplo() {
     console.log(variableGlobal);
 }

 ejemplo(); // Segunda impresión

 console.log(variableGlobal); // Tercera impresión