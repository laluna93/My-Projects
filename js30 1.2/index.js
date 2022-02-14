const btn = document.querySelector('.btn')
const text = document.querySelector('.t')
const author = document.querySelector('.author')
const btnLang = document.querySelectorAll('.btnl')
const lang = document.querySelector('.lang');
const ru =document.querySelector('.ru');
const be =document.querySelector('.be');
let langs;
const img = document.querySelector('.img');
console.log(img)
let n=1;
const tex = document.querySelector('.text')
const play = document.querySelector('.play');
const noDisplay = document.querySelector('.btn-no-picture')
const audio = new Audio()
const no = document.querySelector('.btn-no');
const boxBtn=document.querySelector('.box-btn')
audio.src="./luna-snow-flow-from-marvel-super-war-soundtrack-version.mp3"
noDisplay.addEventListener('click', ()=>{
  noDisplay.classList.add('active');
  console.log('active')
  if(noDisplay.classList.contains('active')){
    tex.classList.toggle('no-Display');
    author.classList.toggle('no-Display');
    btn.classList.toggle('no-Display');
    ru.classList.toggle('no-Display');
    be.classList.toggle('no-Display');
    boxBtn.classList.toggle('active');
    no.classList.toggle('active');
  }else{}
})
no.addEventListener('click', ()=>{
  no.classList.add('active');
 if(no.classList.contains('btn-no')){
      if(n === 87) {
        n = 0;
      }
      }
    if(no.classList.contains('active')){
      console.log('click')
    }
    img.style.backgroundImage = `url(./assets/img/pictures/${n}.jpg)`;
})
play.addEventListener('click', ()=>{ 
  play.classList.toggle('active')
  if(play.classList.contains('active')){
  document.getElementById('img').src = './assets/svg/pause.svg'
  audio.play()
  }else{
    document.getElementById('img').src = './assets/svg/play_icon_176699.svg'
    audio.pause()
  }
})
setInterval(() => {
  if(audio.currentTime === audio.duration) {
    audio.play()
  };
},1000)
btn.addEventListener('click', () =>{
  btn.classList.toggle('active')
  if(btn.classList.contains('btn')){
    if(n === 87) {
      n = 0;
    }
    }
  if(btn.classList.contains('active')){
    btn.classList.remove('active')
    console.log('click')
    getData()
  }
  img.style.backgroundImage = `url(./assets/img/pictures/${n}.jpg)`;
})
let url='./quotes.json';
async function getData() {
    const res = await fetch(url);
    const data = await res.json();
  console.log(data.text)
let length = data.length
 let randomNumber = Math.floor(Math.random(length) *  100)
 console.log(randomNumber)
 text.innerHTML = data[randomNumber].text;
 author.innerHTML = data[randomNumber].author;
 text.classList.add('active')
  }
  getData();
btnLang.forEach(item =>{
  item.addEventListener('click', ()=>{
    for(let i = 0; i < btnLang.length; i++){
      btnLang[i].classList.remove('active')
    }
item.classList.add('active')
  })
})
function getTranslate(langs){
  const objs = document.querySelectorAll('[data-lang]');
  objs.forEach(item =>{
    item.textContent = langObj[langs][item.dataset.lang]
    console.log(item.textContent = langObj[langs][item.dataset.lang])
  getData();
  })
}
be.addEventListener('click', () => {
  url = './bquotes.json';
  getTranslate('be')
})
ru.addEventListener('click', () =>{
url = './quotes.json';
  getTranslate ('ru')
} )
const langObj = {
  'be': {
    'text': 'Тут будуць цытаты',
    'buttons': 'Атрымаць цытату',
    'buttonss': 'Наступная карцінка'
  },
  'ru': {
    'text': 'Здесь будут цитаты',
    'buttons': 'Получить цитату',
    'buttonss': 'Следующая картинка'
  }
}


 