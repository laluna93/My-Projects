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
const play = document.querySelector('.play')
const audio = new Audio()

play.addEventListener('click', ()=>{
  play.classList.toggle('active')
  console.log('1')
  if(play.classList.contains('active')){
    audio.src="./luna-snow-flow-from-marvel-super-war-soundtrack-version.mp3"
  console.log('pause')
  document.getElementById('img').src = './assets/svg/pause.svg'
  audio.play()
  }else{
    console.log('play')
    document.getElementById('img').src = './assets/svg/play_icon_176699.svg'
    audio.pause()
  }
})

function audioPlay(){
  play.classList.add('active')
  play.classList.remove('pause')
  console.log('play')
document.getElementById('img').src = './assets/svg/play_icon_176699.svg'
audio.currentTime +=10;
}
function audioPause(){
  play.classList.remove('active')
  play.classList.add('pause')
  console.log('play')
  document.getElementById('img').src = './assets/svg/pause.svg'
  

}


btn.addEventListener('click', () =>{
  btn.classList.toggle('active')
  if(btn.classList.contains('btn')){
    if(n === 24) {
      n = 0;
    }
    }
  if(btn.classList.contains('active')){
    btn.classList.remove('active')
    console.log('click')
    getData()
  }
  img.style.backgroundImage = `url(./assets/img/pictures/${n}.jpg)`;
  console.log(++n)
})
let url='./quotes.json';

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  console.log(data.text)
  console.log(data[0].author)
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
  },
  'ru': {
    'text': 'Здесь будут цитаты',
    'buttons': 'Получить цитату',
  }
}


 