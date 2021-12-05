
                /* NOTA IMPORTANTE: Javascript cuando se trabaja con varios condicionales ejecuta la opción verdadera que
                se encuentre primero en el programa es decir si dos condicionales son verdaderas, la que se encuentre antes
                en el código será la ejecutada asi que es importante que se escoja el orden de las condicione adecuadamente 
                */ 

function clasificarValor(valor) {
    if (valor < 5) {
        console.log("El valor es menor que 5")
    } else if (valor < 10) {
        console.log("El valor es menor que 10");
    } else {
        console.log("El valor es mayor o igual a 10");
    }
}

clasificarValor(3);
clasificarValor(6);
clasificarValor(10);