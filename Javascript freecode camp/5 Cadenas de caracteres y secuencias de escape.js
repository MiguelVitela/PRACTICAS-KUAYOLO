// Crear variables de texto
var miNombre = "Miguel";
var miApellido = "Vitela";


                                // ESCAPAR COMILLAS
// Podemos intercalar el uso de comillas para evitar errores de sintaxis como observamos a continuación:
var cadenaComillas = 'Hola soy una cadena de caractéres con "comillas"';
console.log(cadenaComillas);


                                // SECUENCIAS DE ESCAPE
// Las secuencias de escape son una combinación de caracteres que no se representan así mismos en una cadena de caractperes.

/* Secuencias de Escape

Código     |      Resultado
---------------------------
\'           Comilla simple
\"           Comilla doble
\\           Barra invertida
\n           Línea Nueva
\r           Retorno de carro
\t           Tabulación
\b           Retroceso
\f           Salto de página
...
*/

console.log("Estoy aprendiendo:\nJavaScript"); // salto de linea


                            // Concatenar cadenas de caracteres
// Con Operador suma (+)
var nombreCompleto = "Miguel" + " Vitela";
console.log(nombreCompleto);


                            // CONSTRUIR CADENAS CON VARIABLES
// Con operador suma (+)
var verbo = "programar";
var lenguaje = "JavaScript";
var mensaje = "Estoy aprendiendo a " + verbo + " en " + lenguaje;
console.log(mensaje);


                    // AGREGAR VARIABLES A CADENAS DE CARACTERES 
// Con operadores de asignación (+=, -=, *=, /=)
var mensajeCompleto = "Hola soy";
mensajeCompleto += " Miguel y tengo";
mensajeCompleto += " 20 años";
console.log(mensajeCompleto);

// También se pueden usar los operadores de asignación con variables para concatenar cadenas, por ejmplo:
var saludo = "Hola, buenos días tenga usted";
var nombreSaludo = " Señor Pedro";
var apellidoSaludo = " Jiménez";
saludo += nombreSaludo += apellidoSaludo;
console.log(saludo);