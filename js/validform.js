window.onload = inicio;
function inicio(){
    document.formulario.onsubmit = validForm;
}
function validForm(){
    let valido = true;
    valido = validarRazon() && valido;
    valido = validarCodigoEmpresa() && valido;
    //----lamando funciones de abajo y si se cumplen todas, enviar el formulario = true
    return valido;
}
function validarRazon() {
    let valido = true;
    let razonF = document.formulario.nombre.value;
    let regExp = /^[a-zA-ZñÑ][a-zA-ZñÑºª\-\.0-9 ]*[a-zA-ZñÑ\.0-9]$/;
    if(!regExp.test(razonF)){
        document.formulario.error_razon.value ="Error en razon";
        document.formulario.error_razon.style = "visibility: visible";
        valido = false;
    }
    return valido;
}

function validarCodigoEmpresa() {
    let valido = true;
    let valorDelCampo = document.formulario.codempresa.value;
    let regExp = /[a-zA-ZñÑ0-9]{5,10}/;
    if(!regExp.test(valorDelCampo)){
        document.formulario.error_codempresa.value ="Error encódigo de empresa";
        document.formulario.error_codempresa.style = "visibility: visible";
        valido = false;
    }
    return valido;
}