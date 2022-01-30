
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
  // изображение
  const portfolioBtn = document.querySelector('.btn-portfolio');
const portfolioImage = document.querySelector('.img');
 const portfolioBtns = document.querySelector(".box-btn");
 const portfolioImages = document.querySelectorAll(".img");

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
// анимация кнопок
// const activHero = document.querySelector(".btn");
//   activHero.addEventListener('click',() => {
//       activHero.classList.toggle('active')
//       console.log("1")
// })
// const activPrices= document.querySelectorAll('.btnp')
// activPrices.forEach(item => {
// item.addEventListener('click',() => {
//     for(let i = 0; i< activPrices.length; i++){
//     activPrices[i].classList.remove('active')
//     console.log("1")
//       }
//       item.classList.add("active");


//   })
// })
const activBtn = document.querySelectorAll(".btn-portfolio");
  activBtn.forEach(item => {
item.addEventListener("click", () => {
  for(let i =0; i < activBtn.length; i++){
    activBtn[i].classList.remove('active')
  }
  item.classList.add("active")
})
})

// const activCont = document.querySelector(".btnc");
//   activCont.addEventListener('click',() => {
//       activCont.classList.toggle('active')
//       console.log("1")
// })


// theme
const theme = document.querySelector('.theme');
theme.addEventListener("click", () => {
  theme.classList.toggle("active");
  let arrayTheme = ["body", "header", "container", "section", "footer"]
 for(let key in arrayTheme){
  for(let i = 0; i < arrayTheme.length; i++){
   let value = document.querySelector(arrayTheme)
value.classList.toggle("light-theme")
  } 
 }
})
const theme2 = document.querySelector('.theme2');
theme2.addEventListener("click", () => {
  theme2.classList.toggle("active");
  let arrayTheme = ["body", "header", "container", "section", "footer"]
 for(let key in arrayTheme){
  for(let i = 0; i < arrayTheme.length; i++){
   let value = document.querySelector(arrayTheme)
value.classList.toggle("light-theme")
  } 
 }
})

// кнопки языка
const lang = document.querySelector(".menu-lang");
const activLang = document.querySelectorAll(".btn-l")
activLang.forEach(i => {
  i.addEventListener("click", () => {
    for(let i = 0; i < activLang.length; i++){
      activLang[i].classList.remove('active')
    }
    i.classList.add('active')
    })
})
lang.addEventListener("click", (event) =>{
let langs = event.target.dataset.lang;
if (event.target.classList.contains('btn-l')){
getTranslate(langs)
}
});  
function getTranslate(langs){
const clOb = document.querySelectorAll("[data-i18]")
clOb.forEach(item => {
item.textContent = i18Obj[langs][item.dataset.i18]
item.placeholder =i18Obj[langs][item.dataset.i18]

console.log(langs, clOb);
})
  }
  lang.addEventListener("click", (event) =>{
    let langs = event.target.dataset.lang;
    if (event.target.classList.contains('btn-l')){
      getLocalStorage(langs)
    }
    });

  function getLocalStorage(langs) {
    if(localStorage.getItem('.menu-lang')) {
      const lang = localStorage.getItem('.menu-lang');
      getTranslate(lang);
    }
  }
  window.addEventListener('load', getLocalStorage)


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