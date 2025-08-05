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
=======
if(!Number.isInteger(numero)) {
    return "El numero debe ser un entero"
}
if (numero % 2 == 0) {
    return toString.numero(2);
}
return toString.numero(16);
}

//En el mismo archivo index.js debes crear una función con tu nombre y 
// debe retornar un objeto con tu nombre, tu edad y tu nacionalidad. (recuerda hacer commit y push).
function stefania () {
    return {
    nombre: "Stefania",
    edad: "24",
    nacionalidad: "Argentina"
   }

}
   
