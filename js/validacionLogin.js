const formLogin = document.getElementById('login-form')
const email = document.querySelector('#mail-login')
const password = document.querySelector('#pass-login')
const emailMensaje = document.querySelector('.email-mensaje')
const passMensaje = document.querySelector('.pass-mensaje')

document.addEventListener('DOMContentLoaded', ()=> {
  
  formLogin.addEventListener('submit', (event)=> {
    validarEmail(event)
    validarPassword(event)
  })
  
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
    console.log(userEmail)   
  }
  
  function validarPassword(event) {
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
    else {
      passMensaje.style.color = 'springgreen'
      passMensaje.textContent = 'Contraseña validada exitosamente'
    }
    console.log(userPass)
  }

  function emailRegEx(email) {
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regEx.test(email)
  }

  email.addEventListener('input', ()=> {
    email.value !== '' || !null
    ? emailMensaje.textContent = ''
    : ''
  })

  password.addEventListener('input', ()=> {
    password.value !== '' || !null
    ? passMensaje.textContent = ''
    : ''
  })

})
