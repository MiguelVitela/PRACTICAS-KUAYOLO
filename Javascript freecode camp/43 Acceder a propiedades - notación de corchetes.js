
/* Una notación alternativa para acceder a las propiedades de un onjeto es laNOTACIÓN DE CORCHETES. */

var miCasa = {
    "Color": "Rosa",
    "Pisos": 2,
    "Ubicación": "Tancol",
    "Costo de vivienda": 1300000
};

/* NOTA CUANDO ESCRIBIMOS EL NOMBRE DE UNA PROPIEDAD DE UN OBJETO ENTRE COMILLAS("") PODEMOS DEJAR ESPACIOS, SI NO ESCRIBIMOS
COMILLAS SOLO PODEMOS DAR UN NOMBRE DE UNA SOLA PALABRA A LA PROPIEDAD */

/* La notación de corchetes se usa para interactuar con las propiedades de un objeto que hayan sido definidas con varios 
espacios de por medio coo se puede observar a continuación. */

console.log(miCasa["Costo de vivienda"]);

//Aunque la notaci´ón de corchetes también se puede usar para culaquier propiedad aunque haya sido definida por 1 sola palabra.

console.log(miCasa["Color"]);
