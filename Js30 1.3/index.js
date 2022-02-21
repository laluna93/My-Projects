const hero = document.querySelector('.hero');
const table = document.querySelector('.table');
const li = document.querySelectorAll('.a');
const squares = document.querySelectorAll('.square');
let count = 0;
let winCountX=[];
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
const start = document.querySelector('.start');
const btnStart = document.querySelector('.btn-start')
let saveResult = JSON.stringify(result)
console.log('1')
// arr()

 function setLocalStorage(){
    localStorage.setItem('res',JSON.stringify (winCountX))
 }
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage(){
let res= JSON.parse(localStorage.getItem('res') || [])
winCountX=res
arr()
}
window.addEventListener('load', getLocalStorage)


btnStart.addEventListener('click', ()=>{
    btnStart.classList.add('active')
    if(btnStart.classList.contains('active')){
        game.classList.add('active');
        start.classList.toggle('active')
        clear.classList.toggle('active')
    }
})


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
      
            for(let i =0; i<winCountX.length;i++){
                li[i].innerHTML = ''
                    }
                winCountX.splice(li)

localStorage.removeItem('result',winCountX)

// location.reload()

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
    audioClick()
    }
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
            text.innerHTML = ` Победили X! Сделано ${count} ходов`;
            windows()
            result =` Победили X! Сделано ${count} ходов`;
            saveResult = JSON.stringify(result)
            if( winCountX === null){
                winCountX = []
            winCountX.push(result)
            audioWin()
            arr()
            }else{
                winCountX.unshift(result)
                audioWin()
                arr()
            }
saves =true
        break
        } else if (square[arrWin[i][0]].innerHTML === '0' && square[arrWin[i][1]].innerHTML === '0' && square[arrWin[i][2]].innerHTML === '0') {
            text.innerHTML = ` Победили 0! Сделано ${count} ходов`;
            windows()
            result =` Победили  0! Сделано ${count} ходов`;
            saveResult = JSON.stringify(result)
            if( winCountX === null){
                winCountX = []
            winCountX.push(result)
            audioWin()
            }else{
                winCountX.unshift(result)
        audioWin()
            }
        saves =true
        arr()
        break
        }
        } 
        if (count == 9 && saves == false) {
            text.innerHTML = `У Вас Ничья! Сделано ${count} ходов`;
            windows()
            result = `Ничья! Сделано ${count} ходов`
            saveResult = JSON.stringify(result)
            if( winCountX === null){
                winCountX = []
            winCountX.push(result)
        arr()
        audioWin()
            }else{
                winCountX.unshift(result)
        audioWin()
        arr()
            }
saves =true
        arr()
        }
    localStorage.setItem('result',saveResult)
}
function arr(){
    if(winCountX.length<10){
        for(let i =0; i<winCountX.length;i++){
            li[i].innerHTML =  winCountX[i]
                }
    }else{
        for(let i =0; i<li.length;i++){
            li[i].innerHTML =winCountX[i]
                }
                winCountX.splice(10,1)

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

// clear.addEventListener('active', ()=>{
//     clear.classList.toggle('active')
//     for(let i =0; i<winCountX.length;i++){
//         li[i].innerHTML =  winCountX[i]
//             }
// })