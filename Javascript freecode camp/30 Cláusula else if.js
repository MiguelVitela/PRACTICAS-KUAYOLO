/* Los condicionales también pueden verificar y manejar varias condiciones, else if puede encargarse de eso (manejar 
condiciones alternativas) y decidir que pasa si alguna de ellas es verdadera. */

function clasificarValor(valor) {
    if (valor % 2 == 0) {
        console.log("El valor que introdujo es divisible entre 2");
    } else if (valor % 3 == 0) {
        console.log("el valor que introdujo es divisible entre 3");
    } else {
        console.log("El valor que introdujo no es divisible ni entre 2 ni entre 3");
    }
}

clasificarValor(3);
clasificarValor(4);
clasificarValor(5);