function laCajaDePandora(numero){
    //que reciba como parámetro un número entero.
    if(!Number.isInteger(numero)){
        return "El número debe ser un entero.";
    }   
    //  Si es un número par, debe convertirlo a binario y retornarlo, 
    if(numero % 2 === 0){
        return numero.toString(2);
    }
    // y si es impar, convertirlo a hexadecimal y retornarlo.
        return numero.toString(16);
}
function victoria() {
    return{
        nombre: "Victoria",
        edad: 25,
        nacionalidad: "Argentina"
    }
}
