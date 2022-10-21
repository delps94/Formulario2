window.onload = inicio;
function inicio(){
    document.formulario.onsubmit = validForm;
}
function validForm(){
    let valido = true;
    valido = validarRazon() && valido;
    valido = validarCodigoEmpresa() && valido;
    valido = nif_Cif() && valido;
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
function nif_Cif(){
    let valido = true;
    let cifNif= document.formulario.cifnif.value;
    if(!esCif(cifNif)&& !esNif()){
        document.formulario.error_nifcif.value = "Erro, no es cif ni nif";
        document.formulario.error_nifcif.style = "visibility: visible";
        valido = false;
    }
    return valido;
}
//validar radios
function iterateOverRadioGroups(listOfRadioButtons) {
    for (var i = 0; i < listOfRadioButtons.length; i++) {
        if (listOfRadioButtons[i].checked) {
            return true;
        }
    }
    return false;
}


function botonSelect() {
    let cadena_errores = "";
    let radio = document.formulario.radios;
    let sector = document.formulario.sector;
    let tipo = document.formulario.tipo;
    if (!iterateOverRadioGroups(radio)) {
        cadena_errores += "No has seleccionado personal\n ";
    }
    if (!iterateOverRadioGroups(sector)) {
        cadena_errores += "No has seleccionado sector\n ";
    }
    if (!iterateOverRadioGroups(tipo)) {
        cadena_errores += "No has seleccionado tipo\n ";

    }
    return cadena_errores;
}


//validar desplegable
function validarDesplegable() {
    let cadena_errores = "";
    let indice = document.formulario.comunidades.options;
    let counter = 0;
    
    for (let i = 0; i < indice.length; i++) {
        
        if (indice[i].selected) {
            console.log("----"+i);
            counter++;
        }
    }
    if (counter < 2) cadena_errores = "tiene que seleccionar al menos dos comunidades";
    return cadena_errores;

}
