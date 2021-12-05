function IMC(indiceMasaCorporal){
    if (indiceMasaCorporal < 18.5) {
        console.log("Bajo peso");
    } else if (indiceMasaCorporal <= 24.9){
        console.log("Peso normal");
    } else if (indiceMasaCorporal <= 29.9){
        console.log("Sobrepeso");
    } else {
        console.log("Obesidad");
    }
}

IMC(17);
IMC(22);
IMC(27);
IMC(32);