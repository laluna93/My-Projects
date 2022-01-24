'use strict'

const burg = document.querySelector('.burg'),
navMenu = document.querySelector('.menu-nav'),
close = document.querySelector('.close')
burg.addEventListener('click', () => { 
    burg.classList.toggle("display-none");
    console.log("a");
    navMenu.classList.toggle("active");
    console.log("1");

})

close.addEventListener('click', () => { 
    navMenu.classList.toggle("active");
    console.log("a");
    burg.classList.toggle("display-none");
    console.log("a");
})

