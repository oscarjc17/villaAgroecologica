let menuIcon = document.getElementById('menu_icon')
let divMenu = document.getElementById('menu')
let menuArea = document.getElementById('main')
let scrollStart = window.scrollY

menuIcon.addEventListener('click', () => {
   divMenu.classList.toggle('nav_menu--show')
})

menuArea.addEventListener('click', () => {
divMenu.classList.remove('nav_menu--show')
})

window.onscroll = function() {
    let scrollEnd = window.scrollY
    if (scrollStart < scrollEnd) {
        divMenu.classList.remove('nav_menu--show')
    }
}