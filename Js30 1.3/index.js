const hero = document.querySelector('.hero');
const table = document.querySelector('.table');
const li = document.querySelectorAll('.a');
const squares = document.querySelectorAll('.square');
let count = 0;
let winCountX=[];
let winCount0=[];
let winCount=[];
let win ;
const wins = document.querySelector('.wins');
const text = document.querySelector('.text');
const btn =document.querySelector('.btn');
const game =document.querySelector('.game');
const img =document.querySelector('.img');
const fon =document.querySelector('.fon');
let result;
let saves =0;
let saveResult = JSON.stringify(result)
// let res = 'result';
// li.innerHTML = res
console.log('1')
arr()

 function setLocalStorage(){
    localStorage.setItem('res',JSON.stringify (winCountX))
    localStorage.setItem('ser', JSON.stringify(winCount0))
 }
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage(){
let res= JSON.parse(localStorage.getItem('res'))
let ser= JSON.parse(localStorage.getItem('res'))
winCountX=res
winCount0=ser
arr()
}
window.addEventListener('load', getLocalStorage)
// localStorage.removeItem('res')
squares.forEach(i =>{
i.addEventListener('click',() =>{
    for(let i =0; i<squares.length;i++){
        squares[i].classList.add('active')
    }
        i.classList.remove('active')
})
    })
hero.addEventListener('click', event => {
    if (event.target.className == 'square' && event.target.textContent =='') {
        count % 2 === 0 ? event.target.innerHTML = 'X' : event.target.innerHTML = '0';
        count++;
        console.log(count);
        winPlayer()
    }
})
function winPlayer() {
    const square = document.querySelectorAll('.square');
    const arrWin = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    let saves = false

    for (let i = 0; i < arrWin.length; i++) {
        console.log(arrWin[i])
        if (count <10 && square[arrWin[i][0]].innerHTML === 'X' && square[arrWin[i][1]].innerHTML === 'X' && square[arrWin[i][2]].innerHTML === 'X') {
            text.innerHTML = ` WIns - X! ходов ${count}`;
            wins.classList.toggle('active')
            btn.classList.toggle('active')
            game.classList.remove('active')
            result =` WIns - X! ходов ${count}`;
            saveResult = JSON.stringify(result)
            if( winCountX === null){
                winCountX = []
            winCountX.push(count)
            }
            winCountX.push(count)
        console.log(winCountX)
saves =true
        arr()
        break
        } else if (square[arrWin[i][0]].innerHTML === '0' && square[arrWin[i][1]].innerHTML === '0' && square[arrWin[i][2]].innerHTML === '0') {
            text.innerHTML = ` WIns - 0! ходов ${count}`;
            wins.classList.toggle('active');
            btn.classList.toggle('active')
            game.classList.remove('active')
            result =` WIns - 0! ходов ${count}`;
            saveResult = JSON.stringify(result)
            li.innerHTML =saveResult
saves=true
            winCount0.push(count)
        console.log(winCount0)
        break
        }
     
        } 
        if(count==9 && saves==false){
                text.innerHTML = `No WIns! ходов ${count}`;
                                wins.classList.add('active');
                                btn.classList.add('active')
                                game.classList.remove('active')
                                result = 'no WIns'
                                saveResult = JSON.stringify(result)
                                winCount.push(count)  
    
            }
   
    localStorage.setItem('result',saveResult)
}
function arr(){
    console.log(winCountX)
    if(winCountX.length<10){
        for(let i =1; i<winCountX.length;i++){
            li[i].innerHTML = winCountX[i]
                }
    }else{
        for(let i =1; i<li.length;i++){
            li[i].innerHTML = winCountX[i]
                }
    }
}
btn.addEventListener('click', ()=>{
    btn.classList.toggle('active')
    location.reload()

    wins.classList.remove('active');
    btn.classList.remove('active')
    game.classList.add('active')

})