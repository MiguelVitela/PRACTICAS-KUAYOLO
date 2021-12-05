/* Las variables locales son aquellas que fueron creadas dentro de una función y que solo se 
pueden usar dentro de esa función.*/

function ejemplo(){
    var variableLocal = 4;
    console.log(variableLocal);
}

ejemplo(); // Primera impresión

console.log(variableLocal); // Error