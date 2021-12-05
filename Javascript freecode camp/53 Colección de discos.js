/* Tenemos un objeto que representa parte de una colección de álbumes musicales.

Cada álbum tiene un número de idenntificación único (id) asociado a otras propiedades.

No todos los álbumes tienen la información completa. */

var coleccionDeDiscos = {
    7853: {
        tituloDelAlbum: "Bee Gees Greatest",
        Artista: "Bee Gees",
        Canciones: ["Staying alive"]
    },
    5439: {
        tituloDelAlbum: "ABBA Gold",

    }
}

/* Define una función actualizarDiscos que tome los siguientes parámetros:

*discos (el objeto que representa la colección de discos)
*id
*propiedad (artista o canciones)
*valor.

Tu meta es completar la función implementando las siguientes reglas para modificar el onjeto pasado a la función:

- Si valor es una cadena vacía, elimina la propiedad del album correspondiente.

- Si propiedad es igual a la cadena de caracteres "canciones" pero el album no tiene una propiedad llamada "canciones", 
crea un arreglo vacio y agrega "valor" a ese arreglo.

- Si "propiedad es igual a la cadena de caracteres "canciones" y "valor" no es una cadena vacía, agrega "valor" al final
del arreglo de canciones del album correspondiente.

- Si "valor" no es una cadena vacía y "propiedad" no es igual a "canciones", asigna el valor del parámetro "valor" a la 
propiedad. Si la propiedad no existe, debes crearla y asignar este valor.*/



function actualizarDiscos(discos, id, propiedad, valor) {
    if (valor === "") {
        delete discos[id][propiedad];
    } else if (propiedad === "canciones") {
        discos[id][propiedad] = discos[id][propiedad] || [];
        discos[id][propiedad].push(valor);
    } else {
        discos[id][propiedad] = valor;
    }
}

console.log(coleccionDeDiscos[7853].tituloDelAlbum);
actualizarDiscos(coleccionDeDiscos, 7853, "tituloDelAlbum", "");
console.log(coleccionDeDiscos[7853].tituloDelAlbum);