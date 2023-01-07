let turn = 'x'
const buttons = document.querySelectorAll(".box");

let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let gameOver = false;
const pointsX = document.querySelector(".pointX");
const points1 = pointsX.textContent;
const pointsY = document.querySelector(".pointO");
const points2 = pointsY.textContent;
let pvp = true;
console.log(pvp)
let pointsPlayerX = parseInt(localStorage.getItem("Xpoints"));
pointsX.textContent = pointsPlayerX;
let pointsPlayerO = parseInt(localStorage.getItem("Opoints"));
pointsY.textContent = pointsPlayerO;



const playerVplayer = document.querySelector('.pve');
playerVplayer.addEventListener('click', work);

function work() {
      pvp = false;
     console.log(pvp)
}


function winCheck() {
    if (arr[0] + arr[3] + arr[6] == 3) {
        xWinConfirm();

    }
    else if (arr[0] + arr[3] + arr[6] == -3) {
        yWinConfirm();

    }
    else if (arr[1] + arr[4] + arr[7] == 3) {
        xWinConfirm();

    }
    else if (arr[1] + arr[4] + arr[7] == -3) {
        yWinConfirm();

    }
    else if (arr[2] + arr[5] + arr[8] == 3) {
        xWinConfirm();

    }
    else if (arr[2] + arr[5] + arr[8] == -3) {
        yWinConfirm();

    }
    else if (arr[0] + arr[1] + arr[2] == 3) {
        xWinConfirm();
    }
    else if (arr[0] + arr[1] + arr[2] == -3) {
        yWinConfirm();
    }
    else if (arr[3] + arr[4] + arr[5] == 3) {
        xWinConfirm();
    }
    else if (arr[3] + arr[4] + arr[5] == -3) {
        yWinConfirm();
    }
    else if (arr[6] + arr[7] + arr[8] == 3) {
        xWinConfirm();
    }
    else if (arr[6] + arr[7] + arr[8] == -3) {
        yWinConfirm();

    }
    else if (arr[0] + arr[4] + arr[8] == 3) {
        xWinConfirm()
    }
    else if (arr[0] + arr[4] + arr[8] == -3) {
        yWinConfirm();
    }
    else if (arr[6] + arr[4] + arr[2] == 3) {
        xWinConfirm();
    }
    else if (arr[6] + arr[4] + arr[2] == -3) {
        yWinConfirm();
    }

}

const reload = document.querySelector('.reload');

reload.addEventListener('click', function () {
    arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    buttons.forEach(function (element) {
        element.classList = null;
    })
    gameOver = false;
})


const reset = document.querySelector('.reset');


reset.addEventListener('click', function () {
    arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    buttons.forEach(function (element) {
        element.classList = null;
    })
    console.log(localStorage);
    gameOver = false;
    let resetO = 0
    let resetX = 0
    pointsY.textContent = resetO
    pointsX.textContent = resetX
    localStorage.setItem("Xpoints", "0");
    localStorage.setItem("Opoints", "0");
});


function bot() {
    buttons.forEach((element, index) => {
        buttons[index].addEventListener("click", () => {
            if (arr[index] == 0) {
                if (gameOver == false) {
                    element.classList.add('x-filled');
                    updateArray(element, index);
                    turn = 'y';
                    botPressO();
                    winCheck();

                }
            }
        })
    })
}

if (pvp == true) {
     regular()
}
else if (pvp == false ) {
     bot()
}

function regular() {
    buttons.forEach((element, index) => {
        buttons[index].addEventListener("click", () => {
            if (arr[index] == 0) {
                if (gameOver == false) {

                    switch (turn) {
                        case "x":
                            element.classList.add('x-filled');
                            updateArray(element, index);
                            winCheck();
                            turn = 'y';
                            break;
                            x = false

                        case "y":
                            element.classList.add('y-filled')
                            updateArray(element, index);
                            winCheck();
                            turn = "x";
                            break;
                    }
                }
            }
        })
    });
}
console.log(arr)


let input = document.querySelector('.input');

let input2 = document.querySelector('.input2')

let playerOneName;
let playerTwoName;

const save = document.querySelector('.saveName');
save.addEventListener('click', myFunction);

function myFunction() {
    window.localStorage.setItem('playerOneName', input.value);
    window.localStorage.setItem('playerTwoName', input2.value);
}
