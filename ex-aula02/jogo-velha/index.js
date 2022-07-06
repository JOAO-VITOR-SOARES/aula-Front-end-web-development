const boxs = document.querySelectorAll(".box_item")
console.log(boxs)

boxs[0].onclick = () => {
    console.log("ola")
    boxs[0].classList.add("2")
}