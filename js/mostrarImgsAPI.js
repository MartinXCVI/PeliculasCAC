const rickMortySection = document.getElementById('rick-morty-section')
const btnMostrar = document.querySelector('.rick-morty-btn-mostrar')
const sectionBtn = document.querySelector('.rick-morty-btn-section')

btnMostrar.addEventListener('click', ()=> {
  rickMortySection.style.display = 'flex'
  sectionBtn.style.display = 'none'
})