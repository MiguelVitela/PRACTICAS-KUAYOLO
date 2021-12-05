/* En el juego blackjack el jugador puede sacarle ventaja a la casa llevando un registro del número relativo de cartas altas
y bajas que quedan en la baraja.

Lo anterior se conoce como "conteo de cartas".

Tener más cartas altas en la baraja es una ventaja para el jugador, se le asigna un valor a cada carta de acuerdo a la
siguiente tabla.

* Cuando el conteo es positivo, el jugador deberí apostar alto.
* Cuando el conteo es 0  o negativo, el jugador debería apostar bajo.

Cambio de conteo           Cartas
---------------------------------
+1                 2, 3, 4, 5, 6
0                  7, 8, 9
-1                 10, "J", "Q", "k", "A"

Nuestra meta es definir una función para contar cartas.

La función debe tomar un parámetro carta que pueda ser un número o una cadena de caracteres y luego aumentar o reducir 
el valor de la variable global conteo de acuerdo al valor de la carta (observar tabla).

La función debe retornar una cadena de caracteres con el conteo actual y la cadena:
 * "Apostar" si el conteo es positivo.
 * "Esperar" si el conteo es negativo o cero.
 * 
 * El conteo actual y la decisión del jugador (Apostar o Esperar) deben estar separados por un espacio.*/


var conteo = 0;

function contarCartas(carta) {
    var decisión;

    switch (carta) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            conteo ++; // Incremetar valor en 1
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            conteo --; // Reduce valor en 1
            break;
    }

    if (conteo > 0) {
        decisión = "Apostar";
    } else{
        decisión = "Esperar";
    }

    return conteo + " " + decisión;
}

console.log(contarCartas(2));
console.log(contarCartas(3));
console.log(contarCartas(7));
console.log(contarCartas("K"));
console.log(contarCartas("A"));