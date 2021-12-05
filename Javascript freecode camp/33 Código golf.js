/* En el juego de golf cada hoyo tiene un par que representa el promedio de golpes que se
espera que haga un golfista para introducir la pelota en el hoyo.

Hay un nombre diferente dependiendo que que tan por encima o por debajo del par estén sus golpes.

Tu función toma´ra los argumentos par y golpes.

Retorna la cadena correcta según esta tabla que muestra los golpes en orden de mayor a menor prioridad.


GOLPES                      RETORNAR
------------------------------------
1                        "Hole-in-one!"
<= par - 2               "Eagle"
par - 1                  "Birdle"
par                      "Par"
par + 1                  "Bogey"
par + 2                  "Double Bogey"
<= par + 3               "Go home"
*/         


// PRIMERO CON CONSOLE.LOG
function golf(par, golpes){
    if(golpes === 1) {
        console.log("Hole-in-one!");
    } else if(golpes <= par - 2) {
        console.log("Eagle");
    } else if(golpes === par - 1) {
        console.log("Birdle");
    } else if(golpes === par) {
        console.log("Par");
    } else if(golpes === par + 1) {
        console.log("Bogey");
    } else if(golpes === par + 2 ){
        console.log("Double Bogey");
    } else {
        console.log("Go home!");
    }
}

golf(10, 1) // Hole in one
golf(10, 5) // eagle
golf(10, 9) // birdle
golf(10, 10) // par
golf(10, 11) // Bogey
golf(10, 12) // double bogey
golf(10, 13) // go home

console.log("--") * 20; // Separador
// AHORA CON RETURN


function golf2(par, golpes){
    if(golpes === 1) {
        return "Hole-in-one!";
    } else if(golpes <= par - 2) {
       return "Eagle";
    } else if(golpes === par - 1) {
        return "Birdle";
    } else if(golpes === par) {
        return "Par";
    } else if(golpes === par + 1) {
        return "Bogey";
    } else if(golpes === par + 2 ){
        return "Double Bogey";
    } else {
        return "Go home!";
    }
}

console.log(golf2(10, 1)) // Hole in one
console.log(golf2(10, 5)) // eagle
console.log(golf2(10, 9)) // birdle
console.log(golf2(10, 10)) // par
console.log(golf2(10, 11)) // Bogey
console.log(golf2(10, 12)) // double bogey
console.log(golf2(10, 13)) // go home


// NOTA IMPORTANTE : UNA FUNCIÓN SE DETIENE AUTOMÁTICAMENTE CUANDO SE TOPA CON EL "RETURN"