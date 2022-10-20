

//funcion cif
function esCif(cadenaCif) {

    let sumaPares = 0;
    let sumaImpares = 0;
    let regexp = /^[AHJUV]{1}[0-9]{8}$/i;
    let regexp2 = /^[PQRSW]{1}[0-9]{7}[A-Z]{1}$/i;
    if (!regexp.test(cadenaCif) && !regexp2.test(cadenaCif)) {
        return 0; //no es valido ya que no cumple las expresiones regulares 
    } else {
        for (let i = 1; i < 8; i++) {
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
        if (regexp.test(cadenaCif)) {
            //formato1.includes(cadenaCif[0])
            if (resultado == cadenaCif[8]) {
                return 1; //cif correcto
            }
        }
        if (regexp2.test(cadenaCif)) {
            let arr = new Array();
            arr = ['J', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
            if (cadenaCif[8] == arr[resultado]) {
                return 1;
            }
        }
    }
    return 2; //cif erroneo o caracter de control erroneo
}


//funcion codigos de control

//funcion calculoIbanEspaña

//funcion comprobarIban