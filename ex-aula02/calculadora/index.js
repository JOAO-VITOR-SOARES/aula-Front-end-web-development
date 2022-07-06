const displayElment = document.querySelector("#display");

const buttonsElement = document.querySelectorAll(".btn")
console.log(buttonsElement)

let display = "0";

buttonsElement.forEach(
(buttonElement) =>{
    buttonElement.onclick = onButtonClickEvent
})


function onButtonClickEvent (event) {
    const buttonElement = event.target

    console.log(buttonElement.innerText);


    switch (buttonElement.innerText){
        case"C":
            limparResultado();
            break;

        case"=":
            calcarResultado();
            break;

        default:
            adicionarcaractere(buttonElement.innerText)
            break;
    }

    updateDisplay()
}

function limparResultado (){
    display = "0";
}


function calcarResultado(){
    try{
        display = eval(display)
    }catch(e){
        display = "ERR!!"
    }
}

function adicionarcaractere(caractere){

    if(display === "0" && caractere !== ".")
        display = "";
    display += caractere;

}

function updateDisplay () {
    displayElment.innerText = display;
}

