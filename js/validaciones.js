//aqui hay que meter las diferentes funciones del formulario--------------------
//----funcion de expresion regular para controlar que sea letra 
function esLetra(str) {
    let expReg = /^[a-záéíóúüñ]+$/i;
    if (!expReg.test(str)) {
        return false;
    } else {
        return true;
    }
}
//----funcion de expresion regular para controlar que sea numero 
function esNumero(numero) {
    let expReg = /^[0-9]+$/g;
    if (!expReg.test(numero)) {
        return false;
    } else {
        return true;
    }

}
//funcion es cif
function esCif(cadenaCif) {
    cadenaCif = cadenaCif.toUpperCase().trim();
    let sumaPares = 0;
    let sumaImpares = 0;
    let regexp = /[ABCDEFGHJUV]/i;
    let regexp2 = /[PQRSW]/i;
    if (cadenaCif.length != 9) {
        //controlamos que no sea distinto de 9
        return 0;//dato no valido o no es cif
    }
    for (let i = 1; i < 8; i++) {
        if (!esNumero(cadenaCif[i])) {
            return 0; //dato no valido o no es cif
        }
        if (i % 2 == 1) {
            //al introducir una cadena, es nesario realizar parseInt para las operaciones
            let num = parseInt(cadenaCif[i]) * 2;
            if (num > 9) {
                //el num%10 me va a dar el primer digito
                //el ultimo numero siempre sera 1
                sumaImpares += 1 + num % 10;
            } else {
                sumaImpares += num;
            }
        } else {
            sumaPares += parseInt(cadenaCif[i]);
        }
    }
    //calculamos el resultado final realizando la suma de pares e impares, el modulo del mismo y restamos 10
    let resultado = 10 - ((sumaImpares + sumaPares) % 10);
    if (resultado == 10) {
        resultado = 0;
    }
    //segun el formato que sea modificamos la ultima letra de la cadena o bien segun el resultado será una letra 
    if (regexp.test(cadenaCif[0])) {
        //formato1.includes(cadenaCif[0])
        if (resultado == cadenaCif[8]) {
            return 1; //cif correcto
        }
    }
    if (regexp2.test(cadenaCif[0])) {
        let arr = new Array();
        arr = ['J', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
        if (cadenaCif[8] == arr[resultado]) {
            return 1;
        }
    }
    return 2; //cif erroneo o caracter de control erroneo

}

//funcion es nif
function esNif(cadenaNif) {
    cadenaNif = cadenaNif.toUpperCase().trim();
    let regexp = /[XYZLKM]/i;
    if (cadenaNif.length != 9) {
        console.log("Se ha introducido un dato no válido. No es NIF ni un DNI");
        return 0;
    }
    if (!esLetra(cadenaNif.substr(-1))) {
        console.log("Se ha introducido un dato no válido. No es NIF ni un DNI");
        return 0;
    }
    if (!regexp.test(cadenaNif.charAt(0)) && !esNumero(cadenaNif.charAt(0))) {
        console.log(" Se ha introducido un dato no válido. No es NIF ni un DNI");
        return 0;
    }
    calculoCaracterControl = cadenaNif.substr(0, 8);
    let cambio = "";
    if (calculoCaracterControl.charAt(0) == "Y") {
        cambio = calculoCaracterControl.replace("Y", "1");
    }
    else if (calculoCaracterControl.charAt(0) == "Z") {
        cambio = calculoCaracterControl.replace("Z", "2");
    } else if (calculoCaracterControl.charAt(0) == "X" || calculoCaracterControl.charAt(0) == 'K' ||
        calculoCaracterControl.charAt(0) == "L" || calculoCaracterControl.charAt(0) == "M") {
        let primeraLetra = calculoCaracterControl.charAt(0);
        cambio = calculoCaracterControl.replace(primeraLetra, "0");
    } else {
        cambio = calculoCaracterControl;
    }
    let arr = new Array();
    arr = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    let posicion = 0;
    posicion = parseInt(cambio) % 23;
    if (cadenaNif.substr(-1) != arr[posicion]) {
        console.log("el nif no es correcto, el caracter de control es erroneo");
        return 2;
    }
    if (!cambio >= 100000) {
        console.log("Se ha introducido un DNI, se ha pasado un número de entre 6 y 8 dígitos con un valor mínimo de 100000.");
        return 3;
    }
    return 1;
}

//funcion nif_nif


//funcion codigos de control

//funcion calculoIbanEspaña

//funcion comprobarIban