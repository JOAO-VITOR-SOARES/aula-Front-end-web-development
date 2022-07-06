const Button = document.querySelector(".start")
const STOPButton = document.querySelector(".stop")
const PAUSE = document.querySelector(".pause")
const sec = document.querySelector("#sec")
const hr = document.querySelector("#hr")
const min = document.querySelector("#min")

let Number = 0;
var intervalo;

let min1 = 0;
let sec1 = 0;
let hr1 = 0;

console.log(sec)

Button.onclick = () => {
    
    intervalo = setInterval(function(){


        

        // sec1 = sec1 + 1
        // Number = Number +1;
        // sec.textContent = parseInt(sec1)
        

        // if (Number >= 10){
        //     sec1 = 0;
        //     if (sec1 = 0){
        //         sec1 = sec1 + 1;
        //     }
        //     min1 = min1 +1 ;
        //     min.textContent = parseInt(min1)
        // }

        // if (Number >= 10){
        //     sec1 = 0
        //     min1 = min1 +1 ;
        //     min.textContent = parseInt(min1)
        // }

        // else if (min1 >= 20){
        //     min1 = 0
        //     hr1 = hr1 +1
        //     hr.textContent = parseInt(hr1)
        // }

    },100)
}

PAUSE.onclick = () => {
    clearInterval(intervalo)
}

STOPButton.onclick = () => {
    Number = 0;
    sec1 = 0;
    min1 = 0;
    hr1 = 0;
    clearInterval(intervalo)
    sec.textContent = 0;
}