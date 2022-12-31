let turn = 'x'
const buttons = document.querySelectorAll(".box");

let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let gameOver = false;
const pointsX = document.querySelector(".pointX");
const points1 = pointsX.textContent;
const pointsy = document.querySelector(".pointO");
const points2 = pointsy.textContent;
let pvp = true;
let pointsPlayerX = parseInt(localStorage.getItem("Xpoints"));
pointsX.textContent = pointsPlayerX;
let pointsPlayerO = parseInt(localStorage.getItem("Opoints"));
pointsy.textContent = pointsPlayerO;
firstturn = true;





function winCheck() {
    if (arr[0] + arr[3] + arr[6] == 3) {
        XWinConfirm();

    }
    else if (arr[0] + arr[3] + arr[6] == -3) {
        YWinConfirm();

    }
    else if (arr[1] + arr[4] + arr[7] == 3) {
        XWinConfirm();

    }
    else if (arr[1] + arr[4] + arr[7] == -3) {
        YWinConfirm();

    }
    else if (arr[2] + arr[5] + arr[8] == 3) {
        XWinConfirm();

    }
    else if (arr[2] + arr[5] + arr[8] == -3) {
        YWinConfirm();

    }
    else if (arr[0] + arr[1] + arr[2] == 3) {
        XWinConfirm();
    }
    else if (arr[0] + arr[1] + arr[2] == -3) {
        YWinConfirm();
    }
    else if (arr[3] + arr[4] + arr[5] == 3) {
        XWinConfirm();
    }
    else if (arr[3] + arr[4] + arr[5] == -3) {
        YWinConfirm();
    }
    else if (arr[6] + arr[7] + arr[8] == 3) {
        XWinConfirm();
    }
    else if (arr[6] + arr[7] + arr[8] == -3) {
        YWinConfirm();

    }
    else if (arr[0] + arr[4] + arr[8] == 3) {
        XWinConfirm()
    }
    else if (arr[0] + arr[4] + arr[8] == -3) {
        YWinConfirm();
    }
    else if (arr[6] + arr[4] + arr[2] == 3) {
        XWinConfirm();
    }
    else if (arr[6] + arr[4] + arr[2] == -3) {
        YWinConfirm();
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


reset.addEventListener('click', function() {
    arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    buttons.forEach(function (element) {
        element.classList = null;
    })
    console.log(localStorage);
    gameOver = false;
    let resetO = 0
    let resetX = 0
    pointsy.textContent = resetO
    pointsX.textContent = resetX
    localStorage.setItem("Xpoints", "0");
    localStorage.setItem("Opoints", "0");
});

if (pvp == true) {
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
                            botPressO();
                            // updateArray(element, index);
                            winCheck();
                            turn = "x"
                            break;
                    }
                }
            }
        })
    })
}

// if (pvp == false) {
//     buttons.forEach((element, index) => {
//         buttons[index].addEventListener("click", () => {
//             if (arr[index] == 0) {
//                 if (gameOver == false) {
//                     switch (turn) {
//                         case "x":
//                             element.classList.add('x-filled');
//                             updateArray(element, index);
//                             vibecheck();
//                             turn = 'y';
//                             break;
//                             x = false

//                         case "y":
//                             element.classList.add('y-filled');
//                             botPressO
//                             updateArray(element, index);
//                             winCheck();
//                             turn = "x"
//                             break;
//                     }
//                 }
//             }
//         })
//     })
// }

console.log(arr)


let input = document.querySelector('.input');

let input2 = document.querySelector('.input2')
// input.addEventListener('click', function() {
// localStorage.setItem('name', input.value)});
// console.log(input.value);

// let input2 = document.querySelector('.input2');

// input2.addEventListener('click', function() {
// localStorage.setItem('name', input2.value)});
// console.log(input2.value)

let PlayerOneName;
let playerTwoName;

const save = document.querySelector('.saveName');
save.addEventListener('click', myFunction); 

function myFunction() {
    window.localStorage.setItem('playerOneName', input.value);
    window.localStorage.setItem('playerTwoName', input2.value);
}
