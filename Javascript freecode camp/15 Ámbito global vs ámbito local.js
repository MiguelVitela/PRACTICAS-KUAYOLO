            //¿QUÉ SUCEDE CUANDO TENEMOS UNA VARIABLE LOCAL Y UNA GLOBAL CON EL MISMO NOMRE?


/* Cuando una variable local y otra global tienen el mismo nombre, siempre se le da preferencia a la variable local.
siempre y cuando estemos llamando a la función donde fué creada a continuación un ejemplo.*/

var miNombre = "Miguel";

function mostrarNombre() {
    var miNombre = "Ángel";
    console.log(miNombre);
}

mostrarNombre(); // Solamente se mostrará Angel porque se le da mayor prioridad a la variable local dentro de la función



console.log(miNombre) // Aqui se imprimirá Miguel porque ya no estamos dentro de la función.