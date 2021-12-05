
/* En el siguiente ejemplo tenemos un objeto principal que está asignado a la variable "miReceta", este objeto principal
tiene 3 propiedades: descripción, costo e ingredientes.

La propiedad "ingredientes tiene como valor a su vez otro objeto, a esto se le conoce como objeto anidado".
Y después tenemos propiedades "base" y "cobertura" que a su vez tienen otros objetos como propiedades. Así que hay ditintos
niveles de objetos anidados*/

var miReceta = {
    "Descripción": "Mi papa asada favorita",
    "Costo": "60 pesos",
    "Ingredientes": {
        "Base": {
            "Papa": "500 gramos",
            "Queso": "2 rebanadas de queso amarillo y 100 gramos de queso asadero",
            "Condimentos": "10 gr de sal y 5 gr de pimienta"
        },
        "Topping":{
            "Carne de pastor": "200 gramos",
            "Cecina": "200 gramos",
            "Queso": "100 gramos de queso amarillo y 200 gramos de queso oaxaca"
        }
    }
};

// COMO ACCEDER A SUS ELEMENTOS?

console.log(miReceta.Ingredientes.Base); // Imprimirá lo que lleva la base.
console.log(miReceta.Ingredientes.Base.Queso); // Imprimirá el tipo de queso.

// También se pueden acceder a sus propiedades con la notación de corchetes.

console.log(miReceta.Ingredientes.Base["Queso"]); // imprimirá los quesos del topping

/* NOTA: La ventaja de utilizar notación de corchetes es que podemos escribir entre los corchetes una variable
de manera que podriamos personalizar los valores a los que accedemos dependiendo de el valor de una varianle, 
esto es muy útil si se interactua con el ususario y el usuario escoge una opción. Pero solamente es obligatoria la notación 
de cprchetes cuando el nombre de uan propiedad lleva un espacio y si necesitas usar una variable también se debe usar la
notación de corchetes. */

// AHORA ADEMTREMONOS A LAS PROPIEDADES DE TOPPING

console.log(miReceta.Ingredientes["Topping"].Cecina);
console.log(miReceta.Ingredientes["Topping"]["Carne de pastor"]); // como carne de pasator lleva espacios se usa notacion de corchetes
console.log(miReceta.Ingredientes["Topping"].Queso);