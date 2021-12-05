// Los parámetros de una función le dan la capacidad a esta de recibir o tomar valores al ser llamada.

function sumar(num1, num2) {
    var suma = num1 + num2;
    console.log("El resultado de " + num1 + " + " + num2 + " es " + suma);
}

// Los argumentos son los valores que pasamos a los parámetros, a continuación varios argumentos y ejemplo de ejecución.
sumar(7, 3);
sumar(5, 5);
sumar(4 * 8, 4 * 4);
sumar(47 * 6, 78 * 9);

// También le podemos dar como argumentos a una función variables previamente declaradas como por ejemplo;
var x = 18 * 245;
var y = 23 * 89;

sumar(x, y);


// A las funciones no solo podemos pasarles numeros, tambien cadenas de caracteres:

function concatenar(cadena1, cadena2, cadena3) {
    console.log(cadena1 + " " + cadena2 + " " + cadena3 + ".");
}

concatenar("Hola yo me llamo", "Miguel", "y me gusta el basquetbol");