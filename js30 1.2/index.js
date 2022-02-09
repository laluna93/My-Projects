const btn = document.querySelector('.btn')
const text = document.querySelector('.t')

const url = 'https://api.icndb.com/jokes';
// const url = 'https://type.fit/api/quotes';

btn.addEventListener('click', () =>{
  btn.classList.toggle('active')
  if(btn.classList.contains('active')){
    btn.classList.remove('active')

    console.log('click')
    getData()
  }
})
async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  console.log(data.value[2].joke)
let length = data.value.length
 let randomNumber = Math.floor(Math.random(length) *  574)
 console.log(randomNumber)
 text.innerHTML = data.value[randomNumber].joke

  }
  getData();

   
  // Get a quote