// También se puede comparar el valor relativo de algo es decir si un valor es mayor o menor que un segundo valor
// (<) =  menor que  |   (>) mayor que

console.log(6 < 8); // true
console.log(6 > 8); // false


                        // TAMBIEN PODEMOS COMPARAR CADENAS.
/* Las cadenas se comparan segun el orden alfabético de las cadenas es decir como aparecerían en un diccionario*/

console.log("B" > "A"); // Si la letra B viene después de la letra A en orden alfabético = true
console.log("ACB" > "ABC");//Si la primer letra de un string es la misma se compara con la segunda y así sucesivamente. = true


                        // ¿QUE PASA SI UNA CADENA TIENE MÁS CARACTERES QUE OTRA?

console.log("AB" > "A"); // El resultado será true porque tiene más caracteres (SOLO ES VALLIDO SI LA PRIMER LETRA SE REPITE).

                        // ¿Y SI ES UNA PALABRA BIEN FORMULADA?

console.log("MUNDO" > "HOLA"); // MUNDO es mayor porque va despues en el diccionario que HOLA