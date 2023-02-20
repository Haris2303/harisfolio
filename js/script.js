const nav = document.querySelector('nav ul')
const menutoggle = document.querySelector('.menu-toggle')

menutoggle.addEventListener('click', () => {
  nav.classList.toggle('slide')
})