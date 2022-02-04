
const audios = document.querySelector('.audio');
const audioBtn = document.querySelector('.play');
const boxBtn = document.querySelector('.main-menu');
const mbtn = document.querySelectorAll('.mbtn');
const hero = document.querySelector('.hero')
const audio = new Audio();
let isPlay = false;

// function playAudio(){
//             audio.currentTime = 0;
//             audio.play();
//             isPlay = false;
//             console.log("play")
//             audioBtn.classList.add('active')
//             audioBtn.classList.remove('pause')
//         document.getElementById('player').src="./assets/svg/pause.svg"
// }
 function pauseAudio(){
    audio.pause();

        isPlay = true;
        console.log("pause")
        audioBtn.classList.add('pause')
        audioBtn.classList.remove('active')
    document.getElementById('player').src="./assets/svg/play.svg"
 }

    // audioBtn.addEventListener('click', playAudio);
    audioBtn.addEventListener('click', ()=>{
        audioBtn.classList.toggle('active');
if(audioBtn.classList.contains('active')){
    document.getElementById('player').src="./assets/svg/pause.svg"
  
    let data = target.dataset.menu;
    audio.src =`./assets/audio/${data}.mp3`;
    playAudio()
}else{
    pauseAudio()
}
    })


    mbtn.forEach((item) =>{
        item.addEventListener('click',() =>{
        for(let i =0; i < mbtn.length; i++){
                mbtn[i].classList.remove('active');
                console.log(mbtn)
        }
        item.classList.add('active');
    audio.src =`./assets/audio/solovey.mp3`;
        
    })
})


boxBtn.addEventListener('click', (event) =>{
    boxBtn.classList.toggle('active');
    audio.src =`./assets/audio/solovey.mp3`;

    if(event.target.classList.contains('mbtn')) {
    console.log(boxBtn);
    let data = event.target.dataset.menu;
    audio.src =`./assets/audio/${data}.mp3`;
 console.log( audio.src =`./assets/audio/${data}.mp3`)
 hero.style.backgroundImage = `url(./assets/img/${data}.jpg)`;
 playAudio()
}else{
    
}
});

