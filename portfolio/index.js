'use strict'
'use strict'
const burg = document.querySelector('.burg')
burg.addEventListener('click', () => { 
    burg.classList.toggle("active");
    console.log("a");
})
const navMenu = document.querySelector('.menu-nav')
navMenu.addEventListener('click', () => { 
    navMenu.classList.toggle("active");
    console.log("1");
})


