let turn = 'x'
const buttons = document.querySelectorAll(".box");
let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let gameOver = false;
const pointsX = document.querySelector(".pointX");
const points1 = pointsX.textContent;
const pointsY = document.querySelector(".pointO");
const points2 = pointsY.textContent;
let pvp;
let tie;
let pointsPlayerX = parseInt(localStorage.getItem("Xpoints"));
pointsX.textContent = pointsPlayerX;
let pointsPlayerO = parseInt(localStorage.getItem("Opoints"));
pointsY.textContent = pointsPlayerO;

const reload = document.querySelector('.reload');

reload.addEventListener('click', function () {
    location.reload();
    movementCheck();
})

const reset = document.querySelector('.reset');

reset.addEventListener('click', function () {
    location.reload();
    console.log(localStorage);
    gameOver = false;
    let resetO = 0
    let resetX = 0
    pointsY.textContent = resetO
    pointsX.textContent = resetX
    localStorage.setItem("Xpoints", "0");
    localStorage.setItem("Opoints", "0");
})

console.log(arr)

let input = document.querySelector('.input');

let input2 = document.querySelector('.input2')

let playerOneName;
let playerTwoName;



