'use strict'
const burg = document.querySelector('.burg'),
navMenu = document.querySelector('.menu-nav'),
navLinks = document.querySelectorAll('.t-li'),
menuRight = document.querySelector('.menu-right'),
portfolioBtn = document.querySelector('.btn-portfolio'),
portfolioImage = document.querySelector('.img'),
portfolioBtns = document.querySelector(".box-btn"),
portfolioImages = document.querySelectorAll(".img"),
activBtn = document.querySelectorAll(".btn-portfolio");
let theme = document.querySelector('.theme'),
btnLang = document.querySelector('.en');
let lang = document.querySelector(".menu-lang");
let activLang = document.querySelectorAll(".btn-l");

let dark = '1';
let langs = 'ru';

function setLocalStorage() {
  localStorage.setItem('langs', langs); 
  localStorage.setItem('dark', dark);
}

// window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if(localStorage.getItem('langs')) {
    langs = localStorage.getItem('langs');
     getTranslate(langs);
}
if (langs === 'ru') { 
  activLang.forEach(item =>
     item.classList.toggle('active'));
  }
  
         if(localStorage.getItem('dark')){
          dark = localStorage.getItem('dark')
          getactiveTheme(dark)
          
         } 
}
window.addEventListener('load', getLocalStorage)


theme.addEventListener('click', () =>{
 const dark = theme.classList.contains("active") ? '0' : '1'

  getactiveTheme(dark)
  localStorage.setItem('dark', dark);

})

function getactiveTheme(dark){
  let arrayTheme = ["body", "header", ".container", "section", "footer", ".hero-container"]
 if(dark==='1'){
  theme.classList.add("active");
  document.getElementById("moon").src="./assets/svg/carbon_sun.svg"
arrayTheme.forEach((item) =>{
  let value = document.querySelector(item)
  console.log(value)
value.classList.remove("light-theme")
})
 } else{
  theme.classList.remove("active");
  document.getElementById("moon").src="./assets/svg/VectorMoon.svg"
arrayTheme.forEach((item) =>{
  let value = document.querySelector(item)
value.classList.add("light-theme")
})
 

 }


//   theme.classList.toggle("active");
//   let arrayTheme = ["body", "header", "container", "section", "footer"]
//  for(let key in arrayTheme){
//    let value = document.querySelector(arrayTheme[key])
// value.classList.toggle("light-theme")

// if( theme.classList.contains("active")){
//   theme.classList.remove("active")
//   document.getElementById("moon").src="./assets/svg/carbon_sun.svg"

// }else{
//   theme.classList.add("active")
//   document.getElementById("moon").src="./assets/svg/VectorMoon.svg"
// }
// }
}


// бургер-меню
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
  // изображение
portfolioBtns.addEventListener("click", (event) => 
 {
  changeImage(event)
});
  function changeImage(event) {
  portfolioBtns.classList.toggle("active");
    if(event.target.classList.contains('btn-portfolio')) {
      let btnSeason =event.target.dataset.season;
      portfolioImages.forEach((img, index) =>
  {img.src =`./assets/img/${btnSeason}/${index + 1}.jpg`});
    }
  }

  activBtn.forEach(item => {
item.addEventListener("click", () => {
  for(let i =0; i < activBtn.length; i++){
    activBtn[i].classList.remove('active')
  }
  item.classList.add("active")
})
})

activLang.forEach(i => {
  i.addEventListener("click", () => {
    for(let i = 0; i < activLang.length; i++){
      activLang[i].classList.remove('active')
    }
    i.classList.add('active')
    
    })
})

// lang
function getTranslate(langs){
const clOb = document.querySelectorAll("[data-i18]")
clOb.forEach(item => {
item.textContent = i18Obj[langs][item.dataset.i18]
item.placeholder =i18Obj[langs][item.dataset.i18]

})
  }
  lang.addEventListener("click", (event) =>{
    langs = event.target.dataset.lang;

   if (event.target.classList.contains('btn-l')){
   
   getTranslate(langs) 
  localStorage.setItem('langs', langs);

   }
   });  
const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Rotouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message',
    'placeholder': 'Message',
    'mail':'E-mail',
'telep': 'Phone'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить',
    'placeholder': 'Сообщение',
    'mail':'Почта',
'telep': 'Телефон'

  }
}