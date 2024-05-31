const apiURL = "https://rickandmortyapi.com/api/character"

const contenedor = document.getElementById('rick-morty-section')

function crearDiv(personaje) {
  const nombre = document.createElement('figcaption')
  nombre.textContent = personaje.name

  const figElem = document.createElement('figure')
  const imgElem = document.createElement('img')
  imgElem.src = personaje.image
  
  const divElem = document.createElement('div')
  divElem.classList.add('rick-morty-div')
  divElem.appendChild(figElem)
  figElem.appendChild(imgElem)
  figElem.appendChild(nombre)

  contenedor.appendChild(divElem)
}

async function getPersonajes() {
  try {
    const respuesta = await fetch(apiURL)
    const { results } = await respuesta.json()

    for(let i = 0; i < 18; i++) {
      crearDiv(results[i])
    }
  }
  catch(error) {
    console.error(error)
  }  
} 

getPersonajes()