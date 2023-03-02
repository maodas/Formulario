var formulario = document.getElementById('form-login')
var pass = document.getElementById('pass-login')

var expMay = RegExp("[A-Z]")
var expMin = RegExp("[a-z]")
var expNum = RegExp("[0-9]")

formulario.addEventListener('submit',function(evento){
    evento.preventDefault()

    var error =""
    if(!pass.value.match(expMay)){
        error +=" Debe tener una mayuscula "
    }if(!pass.value.match(expMin)){
        error +=" Debe tener una minuscula "
    }if(!pass.value.match(expNum)){
        error +=" Debe tener un numero "
    }else{
        error = "Bienvenido"
    }
    alert(error)
    
})