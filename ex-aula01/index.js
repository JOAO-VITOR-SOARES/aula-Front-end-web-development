const bts = document.querySelector(".buttonMa")
const bts2 = document.querySelector(".buttonMe")
const bts3 = document.querySelector(".buttonRE")

bts.onclick = () => {
    
    c.textContent = parseInt(c.textContent) + 1;
    //count.textContent = valor.toString();
    

}

bts2.onclick = () => {
    
    c.textContent /*innerText*/ = parseInt(c.textContent) - 1;
    //count.textContent = valor.toString();
    
    
}

bts3.onclick = () => {
    
    c.textContent =  0;
    //count.textContent = valor.toString();
    
    
}

console.log("teste")