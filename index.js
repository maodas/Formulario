var formulario = document.getElementById('form-login')

formulario.addEventListener('submit',function(evento){
    evento.preventDefault()
    alert("Bienvenido " + document.getElementById('nombre-login').value)
})