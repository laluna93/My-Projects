'use strict'

const burg = document.querySelector('.burg'),
navMenu = document.querySelector('.menu-nav'),
navLinks = document.querySelectorAll('.t-li'),
menuRight = document.querySelector('.menu-right');
burg.addEventListener('click', () => { 
    burg.classList.toggle("active");
    console.log("a");
    navMenu.classList.toggle("nav2");
    menuRight.classList.toggle("visibale-none");
    console.log(menuR);
})
  for(let i =0; i < navLinks.length; i++){
    navLinks[i].addEventListener('click', () => {
      navMenu.classList.toggle("nav2");
    menuRight.classList.toggle("visibale-none");

    burg.classList.toggle("active");

    })
  }
