
const audios = document.querySelector('.audio');
const audioBtn = document.querySelector('.play');
const boxBtn = document.querySelector('.main-menu');
const mbtn = document.querySelectorAll('.mbtn');
const hero = document.querySelector('.hero')
const audio = new Audio();
const sound = document.querySelector('.sound');
const notSouns = document.querySelector('.not-sound');
const mlogo = document.querySelector('.mlogo')
let isPlay = false;

function playAudio(){
            // audio.currentTime = 0;
            // audio.play();
            // isPlay = false;
            console.log("play")
            audioBtn.classList.add('active')
            audioBtn.classList.remove('pause')
        document.getElementById('player').src="./assets/svg/pause.svg";
}
 function pauseAudio(){
    // audio.pause();
    //     isPlay = true;
        console.log("pause")
        audioBtn.classList.add('pause')
        audioBtn.classList.remove('active')
    document.getElementById('player').src="./assets/svg/play.svg"
 }

    audioBtn.addEventListener('click', ()=>{
        audioBtn.classList.toggle('active');
        audio.src =`./assets/audio/forest.mp3`;
        const mbtnActive = document.querySelector('.active');
        audio.pause();
if(audioBtn.classList.contains('active')){ 
    document.getElementById('player').src="./assets/svg/pause.svg"
        let data = mbtnActive.dataset.menu;
        audio.src =`./assets/audio/${data}.mp3`;
        audio.play();
// 


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
        mlogo.classList.remove('active');
    })
    
})
boxBtn.addEventListener('click', (event) =>{
    // boxBtn.classList.toggle('active');
    

    if(event.target.classList.contains('mbtn')) {
    console.log(mlogo);
    let data = event.target.dataset.menu;
    audio.src =`./assets/audio/${data}.mp3`;
 console.log( audio.src =`./assets/audio/${data}.mp3`)
 hero.style.backgroundImage = `url(./assets/img/${data}.jpg)`;
//  playAudio() 
document.getElementById('player').src="./assets/svg/pause.svg"
audioBtn.classList.add('active')
audio.play()
}else{
    boxBtn.classList.remove('active');

}
});


mlogo.addEventListener('click', () =>{
    mlogo.classList.toggle('active');
    for (let i = 0; i < mbtn.length; i++) {
        mbtn[i].classList.remove('active')
    }
    if(mlogo.classList.contains('active')){
        audio.src =`./assets/audio/forest.mp3`;
        boxBtn.classList.remove('active')
    playAudio()
    // }else if (mbtn.classList.contains('active'))
    // mlogo.classList.remove('active');
    }
    audio.play();
}) 