var formulario = document.getElementById('form-login')
var pass = document.getElementById('pass-login')
var nombre = document.getElementById('nombre-login')

var expMay = RegExp("[A-Z]")
var expMin = RegExp("[a-z]")
var expNum = RegExp("[0-9]")

var expPass= RegExp("(?=.*[a-z])(?=.*[A-Z](?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,}")

formulario.addEventListener('submit',function(evento){
    evento.preventDefault()

    var error =""
    if(!pass.value.match(expMay)){
        error +=" Debe tener una mayuscula "
    }if(!pass.value.match(expMin)){
        error +=" Debe tener una minuscula "
    }if(!pass.value.match(expNum)){
        error +=" Debe tener un numero "
    }  
    if(error==""){
        window.comunicacion.registroValido([nombre.value, pass.value]);
    }else{
        alert(error)
    }

})