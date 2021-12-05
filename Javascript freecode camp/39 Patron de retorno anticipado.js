/* CUANDO ESTAMOS TRABAJANDO CON FUNCIONES ES MUY IMPORTANTE ENTENDER QUE CUANDO EL CÓDIGO
LLEGUE A LA PARTE DEL "RETURN" YA NO SE EJECUTARÁN LAS INSTRUCCIONES QUE SE ENCUENTREN DESPUÉS como se puede apreciar a 
continuación */

function miFuncion() {
    console.log("Hola");
    return "Mundo";
    console.log("Ádios");
}

console.log(miFuncion());

/* ESTE PATRÓN DE RETORNO ANTICIPADO ES ESPECIALMENTE UTIL CUANDO NECESITAMOS DETENER LA FUNCIÓN POR ALGUNA CONDICION 
ESPECIFICA POR EJEMPLO */

function raizCuadrada(num){
    if(num < 0) {
        return undefined; // AL MOMENTO DE ESCRIBIR ESTE RETURN SI LA FUNCION ENTRA AL IF SE ROMPERÁ EL CÓDIGO.
    }
    return Math.sqrt(num);
}

console.log(raizCuadrada(25)); // 5
console.log(raizCuadrada(36)); // 6
console.log(raizCuadrada(-5)); // undefined
console.log(raizCuadrada(3)); // 1.73

/* SI NO SE HUBIERA HECHO EL IF CON RETURN AL PASARLE UN NUMERO NEGATIVO COMO ARGUMENTO A LA FUNCIÓN, ESTA NOS HABRÍA 
ARROJADO "NAN" o NO A NUMBE, CON ESTO VEMOS QUE ES POSIBLE ESCRIBIR MÁS DE UN RETURN EN UNA FUNCIÓN DEPENDIENDO
DE NUESTRAS NECESIDADES. */ 