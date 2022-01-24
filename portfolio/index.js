'use strict'
const burg = document.querySelector('.burg')
burg.addEventListener('click', () => { 
    burg.classList.toggle("active");
    console.log("1");
    
})
const menu = document.querySelector('.menu-nav')
menu.addEventListener('click', () => { 
    menu.classList.toggle("active");
    console.log("1");
    
})
