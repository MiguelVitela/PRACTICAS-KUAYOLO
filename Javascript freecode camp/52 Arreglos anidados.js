
/* los arreglos anidados son arreglos que se encuentran dentro de estructuras más complejas como por ejemplo 
dentro de un objeto que es parte de un arreglo */

var materialPendiente = [
    {
        Tipo: "Sala de computacion",
        Lista: [
            "Computadoras",
            "Mouses",
            "Graficas"
        ]
    },
    {
        Tipo: "Biblioteca",
        Lista: [
            "Libros",
            "Cuentos",
            "Estanterias"
        ]
    }
]

/* Los arreglos que se encuentrasn mas al interior del programa, son los arreglos anidados, los arreglos son parte de un 
objeto y a su vez ese objeto es parte de otro arreglo */

// COMO ACCEDER A LOS ELEMENTOS INDIVIDUALES DE ARREGLOS ANIDADOS??

var primerMaterialDeComputacion = materialPendiente[0].Lista[0]; //computadoras
console.log(primerMaterialDeComputacion);

var tercerMaterialDeBiblioteca = materialPendiente[1].Lista[2]; //estanterias
console.log(tercerMaterialDeBiblioteca);