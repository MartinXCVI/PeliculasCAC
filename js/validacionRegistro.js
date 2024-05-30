const formRegistro = document.getElementById('formulario-registro')
const nombre = document.getElementById('nombre-input')
const apellido = document.getElementById('apellido-input')
const email = document.getElementById('email-input')
const password = document.getElementById('pass-input')
const fechaNac = document.getElementById('fecha-nac-input')
const paisLista = document.getElementById('pais-lista')
const terminos = document.getElementById('terminos-input')
const registrarBtn = document.getElementById('registrar-btn')

const nombreMensaje = document.querySelector('.nombre-mensaje')
const apellidoMensaje = document.querySelector('.apellido-mensaje')
const emailMensaje = document.querySelector('.email-mensaje')
const passMensaje = document.querySelector('.pass-mensaje')
const edadMensaje = document.querySelector('.edad-mensaje')
const paisMensaje = document.querySelector('.pais-mensaje')
const terminosMensaje = document.querySelector('.terminos-mensaje')

document.addEventListener('DOMContentLoaded', ()=> {

  formRegistro.addEventListener('submit', (event)=> {
    validarNombre(event)
    validarApellido(event)
    validarEmail(event)
    validarPass(event)
    validarFechaNac(event)
    validarPais(event)
    validarTerminos(event)
  })

  function validarNombre(event) {
    const nombreUsuario = nombre.value.trim()

    if(nombreUsuario === '' || null) {
      nombreMensaje.style.color = 'rgb(255, 0, 50)'
      nombreMensaje.textContent = 'Es necesario que ingrese su nombre'
      event.preventDefault();
    } 
    else if(nombreUsuario.length < 3) {
      nombreMensaje.style.color = 'rgb(255, 0, 50)'
      nombreMensaje.textContent = 'El nombre debe tener mínimo 3 caracteres'
      event.preventDefault();
    }
    else if(nombreUsuario.length > 35) {
      nombreMensaje.style.color = 'rgb(255, 0, 50)'
      nombreMensaje.textContent = 'El nombre debe tener máximo 35 caracteres'
      event.preventDefault();
    }
    else {
      nombreMensaje.style.color = 'springgreen'
      nombreMensaje.textContent = 'Nombre validado exitosamente'
    }
  }

  function validarApellido(event) {
    const apellidoUsuario = apellido.value.trim()

    if(apellidoUsuario === '' || null) {
      apellidoMensaje.style.color = 'rgb(255, 0, 50)'
      apellidoMensaje.textContent = 'Es necesario que ingrese su apellido'
      event.preventDefault()
    }
    else if(apellidoUsuario.length < 3) {
      apellidoMensaje.style.color = 'rgb(255, 0, 50)'
      apellidoMensaje.textContent = 'El apellido debe tener mínimo 3 caracteres'
      event.preventDefault()
    }
    else if(apellidoUsuario.length > 35) {
      apellidoMensaje.style.color = 'rgb(255, 0, 50)'
      apellidoMensaje.textContent = 'El apellido debe tener máximo 35 caracteres'
      event.preventDefault()
    }
    else {
      apellidoMensaje.style.color = 'springgreen'
      apellidoMensaje.textContent = 'Apellido validado exitosamente'
    }
  }

  function validarEmail(event) {
    const userEmail = email.value.trim()

    if(userEmail === '' || null) {
      emailMensaje.style.color = 'rgb(255, 0, 50)'
      emailMensaje.textContent = "Es necesario que ingrese un correo"
      event.preventDefault()
    }
    else if(!emailRegEx(userEmail)) {
      emailMensaje.style.color = 'rgb(255, 0, 50)'
      emailMensaje.textContent = "Ingrese un correo con formato válido"
      event.preventDefault()
    }
    else if(emailRegEx(userEmail)){
      emailMensaje.style.color = 'springgreen'
      emailMensaje.textContent = "Correo validado exitosamente"
    }
  }

  function emailRegEx(email) {
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regEx.test(email)
  }

  function validarPass(event) {
    const userPass = password.value.trim()

    if(userPass === '' || null) {
      passMensaje.style.color = 'rgb(255, 0, 50)'
      passMensaje.textContent = "Es obligatorio ingresar contraseña"
      event.preventDefault()
    }
    else if(userPass.length < 6) {
      passMensaje.style.color = 'rgb(255, 0, 50)'
      passMensaje.textContent = 'Ingrese mínimamente 6 caracteres'
      event.preventDefault()
    }
    else if(userPass.length > 36) {
      passMensaje.style.color = 'rgb(255, 0, 50)'
      passMensaje.textContent = 'Ingrese como máximo 36 caracteres'
      event.preventDefault()
    }
    else {
      passMensaje.style.color = 'springgreen'
      passMensaje.textContent = 'Contraseña validada exitosamente'
    }
  }

  function validarFechaNac(event) {
    if(validarEdad() === '' || null || undefined || NaN || false) {
      edadMensaje.style.color = 'rgb(255, 0, 50)'
      edadMensaje.textContent = 'Es necesario que ingrese su edad'
      event.preventDefault()
    }
    else if(validarEdad() < 18) {
      edadMensaje.style.color = 'rgb(255, 0, 50)'
      edadMensaje.textContent = 'Debe ser mayor de 18 años'
      event.preventDefault()
    }
    else if(validarEdad() >= 18) {
      edadMensaje.style.color = 'springgreen'
      edadMensaje.textContent = 'Edad validada exitosamente'
    }
    
  }
  
  function validarEdad() {
    let fechaActual = new Date()
    let userFecha = new Date(fechaNac.value)
    let diferencia = new Date(fechaActual - userFecha)
    let edad = Math.abs(diferencia.getUTCFullYear() - 1970)

    return edad >= 18 ?  edad : false
  }

  function validarPais(event) {
    if(paisLista.value === 'seleccionar' || '' || null) {
      paisMensaje.style.color = 'rgb(255, 0, 50)'
      paisMensaje.textContent = 'Debe seleccionar su país'
      event.preventDefault()
    }
    else if(paisLista.value !== 'seleccionar' || '' || null) {
      paisMensaje.style.color = 'springgreen'
      paisMensaje.textContent = 'País validado exitosamente'
    }
  }

  function validarTerminos(event) {
    if(!terminos.checked) {
      terminosMensaje.style.color = 'rgb(255, 0, 50)'
      terminosMensaje.textContent = 'Es necesario que acepte los términos'
      event.preventDefault()
    }
    else {
      terminosMensaje.style.color = 'springgreen'
      terminosMensaje.textContent = 'Términos validados exitosamente'
    }
  }

})