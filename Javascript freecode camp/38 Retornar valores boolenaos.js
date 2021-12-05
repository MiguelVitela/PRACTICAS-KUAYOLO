// Ahora veremos como retornar de manera concisa valores booleanos desde una función
function esMenorQue(a, b){
    if (a < b){
        return true;
    } else{
        return false;
    }
}

console.log(esMenorQue(3, 6));


// AUNQUE LO MÁS RECOMENDABLE ES HACERLO DE LA SIGUIENTE MANERA ARA AHORRA MUCHO CÓDIGO

function MenorQue(a, b){
    return a < b;
}

console.log(MenorQue(2 , 3));

// AMBOS BLOQUES DE CÓDIGO HACEN LO MISMO PERO EL SEGUNDO ES MÁS CORTO Y CONCISO