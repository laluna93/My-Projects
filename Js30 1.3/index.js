const hero = document.querySelector('.hero');
const table = document.querySelector('.table');
const li = document.querySelectorAll('.a');
const squares = document.querySelectorAll('.square');
let count = 0;
let winCountX=[];
// let winCount0=[];
// let winCount=[];
let win ;
const wins = document.querySelector('.wins');
const text = document.querySelector('.text');
const btn =document.querySelector('.btn');
const game =document.querySelector('.game');
const img =document.querySelector('.img');
const fon =document.querySelector('.fon');
let result;
let saves =0;
const clear = document.querySelector('.clear');
let saveResult = JSON.stringify(result)
console.log('1')
arr()

 function setLocalStorage(){
    localStorage.setItem('res',JSON.stringify (winCountX))
    // localStorage.setItem('ser', JSON.stringify(winCount0))
    
// localStorage.removeItem('res')

 }
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage(){
let res= JSON.parse(localStorage.getItem('res'))
// let ser= JSON.parse(localStorage.getItem('res'))
winCountX=res
// winCount0=ser
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

    clear.addEventListener('click', ()=>{
        clear.classList.add('active')
        if(clear.classList.contains('active')){
            for(let i =0; i<winCountX.length;i++){
                winCountX.splice(i)
                li[i].innerHTML =  ''
    location.reload()
                    }
        }
localStorage.removeItem('res')

    })


function audioClick(){
    let audio=new Audio
    audio.src = './assets/music/multyashnyiy-schelchok.mp3'
    audio.play()
}

hero.addEventListener('click', event => {
    if (event.target.className == 'square' && event.target.textContent =='') {
        count % 2 === 0 ? event.target.innerHTML = 'X' : event.target.innerHTML = '0';
        count++;
        console.log(count);
        winPlayer()
    }
    audioClick()
})

function audioWin(){
    let audio = new Audio;
    audio.src = './assets/music/akon_feat._pitbull_and_jermaine_dupri_-_boomerang_.mp3'
    audio.play()
}


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
            text.innerHTML = ` Победили X! ходов ${count}`;
            windows()
            result =` Победили X! ходов ${count}`;
            saveResult = JSON.stringify(result)
            if( winCountX === null){
                winCountX = []
                
            winCountX.push(result)
            arr()
            
            }else{
                winCountX.unshift(result)
                audioWin()
                arr()

            }
saves =true
        audioWin()

        break
        } else if (square[arrWin[i][0]].innerHTML === '0' && square[arrWin[i][1]].innerHTML === '0' && square[arrWin[i][2]].innerHTML === '0') {
            text.innerHTML = ` Победили 0! ходов ${count}`;
            windows()
            result =` Победили  0! ходов ${count}`;
            saveResult = JSON.stringify(result)
            if( winCountX === null){
                winCountX = []
            winCountX.push(result)
            }else{
                winCountX.unshift(result)
        audioWin()
              

            }
        saves =true
        arr()
        audioWin()
        break
        }
        } 
        if (count == 9 && saves == false) {
            text.innerHTML = `Ничья! ходов ${count}`;
            windows()
            result = `Ничья! ходов ${count}`
            saveResult = JSON.stringify(result)
            if( winCountX === null){
                winCountX = []
            winCountX.push(result)
        arr()

            }else{
                winCountX.unshift(result)
        audioWin()
        arr()
                

            }
saves =true
        arr()
        audioWin()
        }
   
    localStorage.setItem('result',saveResult)
}
function arr(){
    if(winCountX.length>=0){
        for(let i =0; i<winCountX.length;i++){
            li[i].innerHTML =  winCountX[i]
                }
    }else{
        for(let i =0; i<li.length;i++){
            li[i].innerHTML =winCountX[i]
                }
    }
    console.log(winCountX)

}
btn.addEventListener('click', ()=>{
    btn.classList.toggle('active')
    location.reload()

    wins.classList.remove('active');
    btn.classList.remove('active')
    game.classList.add('active')

})

function windows(){
    wins.classList.toggle('active');
    btn.classList.toggle('active')
    game.classList.remove('active')

}

clear.addEventListener('active', ()=>{
    clear.classList.toggle('active')
    for(let i =0; i<winCountX.length;i++){
        li[i].innerHTML =  winCountX[i]
            }
console.log('1')

})