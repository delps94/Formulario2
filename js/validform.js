window.onload = inicio;
function inicio(){
    document.formulario.onsubmit = validForm;
}
function validForm(){
    let enviar = true;
    //----lamando funciones de abajo y si se cumplen todas, enviar el formulario = true
    return enviar;
}

//aqui los ejercicios donde hay que usar regexp y llamar a las funciones que hay en validaciones

//razon social
function validarRazon() {
    let razonF = document.formulario.nombre.value;
    let razon = razonF.trim();
    let cadena_errores = "";
    let enmedio = razon.substr(1, razon.length - 2);
    let regexp = /[ºª\-\.]/;
    let punto = ".";
    if (!esLetra(razon.charAt(0))) {
        cadena_errores += "En validar razón, Error el primer caracter es incorreecto, debe ser una letra \n";
    }
    if (!esLetra(razon.charAt(razon.length - 1)) && !esNumero(razon.charAt(razon.length - 1)) && razon.charAt(razon.length - 1) != punto) {

        cadena_errores += "En validar razón, Error el ultimo caracter es incorreecto \n";
    }
    for (let i = 0; i < enmedio.length; i++) {
        if (!esLetra(enmedio[i]) && !esNumero(enmedio[i]) && !regexp.test(enmedio[i])) {
            cadena_errores += "Error deben de ser caracteres permitidos \n";
        }
    }
    return cadena_errores;
}
//codigo empleado
function validarCodEmp(codigo_empresa) {
    let cadena_errores = "";
    let codigo_empresa = document.formulario.codempresa.value;
    let codigo_emp = codigo_empresa.trim();
    let expReg = /^[a-záéíóúüñ0-9]{5,10}$/ig;
    if (!expReg.test(codigo_emp)) {
        cadena_errores += "Error la la cadena debe de contener letras  y/o numeros y un minimo de 5 y maximo de 10 de longitud \n";
    }
    return cadena_errores;
}

//validar que nif cif de la empresa sea correcto --> no necesita regexp
