
/* También se pueden agregar nuevas propiedades a un objeto en javascript */

var curso = {
    "Título": "Aprende JavaScrpt",
    "Idioma": "Español",
    "Duración": "9 hrs"
};

                            // AGREGAR OTRA PROPIEDAD

console.log(curso.Profesor); // Undefined porque aun no se agrega la propiedad Profesor
curso.Profesor = "Juan";     // Se agrega propiedad
console.log(curso.Profesor); // Juan

// NOTA: SI IMPRIMIMOS UNA PROPIEDAD DE UN OBJETO QUE NO HA SIDO CREADA ESTA RETORNARÁ "UNDEFINED"

                            // AGREGAR PROPIEDAD CON NOTACIÓN DE CORCHETES.

curso["Plataforma"] = "Youtube";
console.log(curso.Plataforma);  // Youtube