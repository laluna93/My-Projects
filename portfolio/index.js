'use strict'

const burg = document.querySelector('.burg'),
navMenu = document.querySelector('.menu-nav'),
navLinks = document.querySelectorAll('.t-li');
burg.addEventListener('click', () => { 
    burg.classList.toggle("active");
    console.log("a");
    navMenu.classList.toggle("active");
    console.log("1");
})
navMenu.addEventListener('click', closeMenu)
  
function closeMenu(event) {
    if (event.target.classList.contains('t-li')) {
        navMenu.classList.remove('active');
    }
  }