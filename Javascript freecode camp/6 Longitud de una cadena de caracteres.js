                // ENCONTRAR LA LONGITUD DE UNA CADENA DE CARACTERES (incluidos espacios)

// Para ello se ocupa la propiedad ".length"
var miCadena = "Hola me gusta el baloncesto";
console.log(miCadena.length);


                // INMUTABILIDAD DE CADENAS DE CARACTERES

/* Inmutabilidad signifuca que una vez que se defina una cadena de caracteres esta ya no se podrá cambiar (ninguno de sus 
elementos) a no ser que se le reasigne un nuevo valor a la variable original, el siguiente código maracará error
ya que no se puede editar un caracter específico dentro de una cadena al ser estas inmutables*/
//var cadenaCaracteres = "Jola Mundo";
//cadenaCaracteres[0] = "H";
//console.log(cadenaCaracteres);



                // NOTACIÓN DE CORCHETES: PRIMER CARÁCTER

// Es una notación que nos permite acceder a los caracteres individuales de una cadena
//Acceder al primer caractere de una cadena para ello se usa "[0]" nota: Se cuenta de izquierda a derecha comenzando por 0.
var lenguajeProgramacion = "JavaScript";
console.log(lenguajeProgramacion[0]);

// Acceder a cualquier caracter con notacion de cprchetes:
console.log(lenguajeProgramacion[5]); //c
console.log(lenguajeProgramacion[10]); // Undefined: esto debido a que no hay índice 10 en la cadena, lo mismo pasa con negativos [-4] y decimales [4.21]


// Acceder al último caracter de una cadena con notacion de corchetes
console.log(lenguajeProgramacion[lenguajeProgramacion.length - 1]);    // t


// Contar de derecha a izquierda con notación de corchetes
// El penúltimo indice es longitud -2 porque comenzamos a contar desde 0.
console.log(lenguajeProgramacion[lenguajeProgramacion.length - 2]);    // p
console.log(lenguajeProgramacion[lenguajeProgramacion.length - 3]);    // i
console.log(lenguajeProgramacion[lenguajeProgramacion.length - 4]);    // r