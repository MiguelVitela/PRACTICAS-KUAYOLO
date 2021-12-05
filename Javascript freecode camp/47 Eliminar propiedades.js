
var curso = {
    "Título": "Aprende JavaScrpt",
    "Idioma": "Español",
    "Duración": "9 hrs"
};

console.log(curso.Duración); // Antes de eliminar la propiedad, esta devuelve 9 hrs
delete curso.Duración; // Se elimina la propiedad con la palabra "delate"
console.log(curso.Duración); // Al volver a preguntar por la propiedad ahora retorna "undefined"

