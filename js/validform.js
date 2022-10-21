window.onload = inicio;
function inicio(){
    document.formulario.onsubmit = validForm;
}
function validForm(){
    let valido = true;
    valido = validarRazon() && valido;
    valido = validarCodigoEmpresa() && valido;
    valido = botonSelect() && valido;
    valido = validarDesplegable() && valido;
    //valido = nif_Cif() && valido;
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

// function validNif_Cif(){
//     let valido = true;
//     let cifNif = document.formulario.cifnif.value.toUpperCase();
//     //alert(nif);
//     let resultado = nif_Cif(cifNif);
//     if(resultado != "n1" && resultado != "n2"){
//         document.formulario.error_nifcif.value = "Error,el nif no es correcto";
//         document.formulario.error_nifcif.style = "visibility: visible";
    
//         valido = false;
//     }
//     return valido;  
// }
//console.log(validNif_Cif("53909901V"));

        // document.formulario.error_nifcif.value = "Error, el cif no es correcto";
        // document.formulario.error_nifcif.style = "visibility: visible";

//validar radios
function iterateOverRadioGroups(listOfRadioButtons) {
    for (var i = 0; i < listOfRadioButtons.length; i++) {
        if (listOfRadioButtons[i].checked) {
            return true;
        }
    }
    return false;
}

//validar los radios: una funcion para validarlos todos los tipos radios y la funcion de iterateOverRadioGroups para recorrer y hacer el .checked
function botonSelect() {
    let valido=true;
    let radio = document.formulario.tipopersona;
    let tipo = document.formulario.tipo;
    if (!iterateOverRadioGroups(radio)) {
          document.formulario.error_tipo.value = "Error,debes elegir un tipo";
         document.formulario.error_tipo.style = "visibility: visible";
        valido = false;
    }
    if (!iterateOverRadioGroups(tipo)) {
        
        document.formulario.error_tipoemp.value = "Error,debes elegir un tipo";
         document.formulario.error_tipoemp.style = "visibility: visible";
        valido = false;
    }
    return valido;
}

function validarDesplegable() {
    let valido=true;
    let indice = document.formulario.comunidades.options;
    let counter = 0;
    
    for (let i = 0; i < indice.length; i++) {
        
        if (indice[i].selected) {
            console.log("----"+i);
            counter++;
        }
    }
    if (counter < 2) valido = false;
    return valido;

}
