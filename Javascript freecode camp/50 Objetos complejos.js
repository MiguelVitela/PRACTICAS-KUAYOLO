// Ahora tenemos un array de objetos
/* La variable "ordenesDePizzas" contiene un arreglo de 2 objetos y dentro de cada objeto que hay en el arreglo tenemos
secuencias de propiedades y sus valores que siguen un formato muy similar, este formato es muy similar al formato JSON*/

var ordenesDePizza = [
    {
        "Tipo": "Hawaiana",
        "Tamaño": "Individual",
        "Precio": "79 pesos",
        "Toppings": [
            "Extra queso",
            "Carne molida",
            "Jamón"
        ],
        "Para llevar": true
    }, // Aquí se separa el primero objeto del segundo haciendo uso de una coma (,)
    {
        "Tipo": "4 quesos",
        "Tamaño": "Familiar",
        "Precio": "300 pesos",
        "Toppings": [
            "Extra queso",
            "Jamón",
            "Peperoni"
        ],
        "Para llevar": false
    },
    {
        "Tipo": "Mexicana",
        "Tamaño": "Grande",
        "Precio": "189 pesos",
        "Toppings": [
            "Extra queso",
            "Extra chile",
            "Extra chorizo"
        ],
        "Para llevar": true
    }
];

                // Ahora manipulemos ese array de 2 objetos
// Para acceder a los arrays principales
// console.log(ordenesDePizza[0]);
// console.log(ordenesDePizza[1]);


// Para acceder a una propiedad de uno de los dos arrays en específico
console.log(ordenesDePizza[2].Toppings);
console.log(ordenesDePizza[0].Tamaño);
// También se puede hacer con notación de corchetes de la siguiente manera.
console.log(ordenesDePizza[2]["Tamaño"]);
