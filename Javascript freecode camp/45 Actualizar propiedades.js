
/* Ademas de crear un objeto y acceder a sus propiedades tambíen se pueden actualizar dichas propiedades para permitir que el
objeto cambie durante la ejecución del programa */

var mochila = {
    "Color": "Negra",
    "Capacidad": "40 litros",
    "Precio": 500,
    "Cierres": 6,
    "Contenido": ["1 laptop", "1 cuaderno", "2 cargadores"]
};

// PARA ACTUALIZAR LA PROPIEDAD DE UN OBJETO SE USA EL SIGUIENTE MÉTODO.

console.log(mochila.Capacidad); // 40 litros

mochila.Capacidad = "50 litros";
console.log(mochila.Capacidad); // 50 litros

// PARA ACTUALIZAR LA PROPIEDAD CONTENIDO QUE CONSTA DE UN ARRAY SE UTILIZA EL METODO .PUSH EL CUAL METE UN PARAMETRO AL FINAL DLE ARRAY

console.log(mochila.Contenido);

mochila.Contenido.push("1 lapicera");

console.log(mochila.Contenido);


//PARA ACTUALIZAR LA PROPIEDAD CONTENIDO QUE CONSTA DE UN ARRAY SE USA EL MISMO MÉTODO QUE AL ACTUALIZAR UNA PROPIEDAD NORMAL

mochila.Contenido = ["3 cuadernos"];
console.log(mochila.Contenido);