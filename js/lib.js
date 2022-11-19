let click1 = false


const x = document.querySelector(".x");

function myFunction() {
    x.style.display = "block";
    click = true;
    console.log("click")
}

const buttons = document.querySelectorAll(".wrapper > div");

buttons.forEach(function(element) {
    element.addEventListener("click", myFunction);
})