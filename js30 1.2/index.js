const btn = document.querySelector('.btn')
const text = document.querySelector('.t')
const author = document.querySelector('.author')
const btnLang = document.querySelectorAll('.btnl')
const lang = document.querySelector('.lang');
const ru =document.querySelector('.ru');
const be =document.querySelector('.be');
let langs;

btn.addEventListener('click', () =>{
  btn.classList.toggle('active')

  if(btn.classList.contains('active')){
    btn.classList.remove('active')
    console.log('click')
    getData()
  }
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
}
)

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


 