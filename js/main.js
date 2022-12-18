let turn = 'x'
const buttons = document.querySelectorAll(".wrapper > div");
let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let gameOver = false;
const pointsX = document.querySelector(".pointX");
const points1 = pointsX.textContent;
const pointsy = document.querySelector(".pointO");
const points2 = pointsy.textContent;
let pvp = true;
let pointsPlayerX = 0;
let pointsPlayerO = 0;
firstturn = true;

// buttons.forEach(function (element) {
//     element.addEventListener("click", () => {
//         element.classList.add('x-filled');
//         click1 = true;
//         console.log("bruh");
//     });
// })

// while (click1 == true) {

//     buttons.forEach(function (element) {
//         element.addEventListener("click", () => {
//             element.classList.add('y-filled');
//             console.log("click");
//             click1 = false;
//             console.log("hurb");
//         });
//     })
// }




// function Haltx() {
//     element.classList.add('x-filled');
//     updateArray(element, index);
//     vibecheck();
// }

// function Halty() {
//     element.classList.add('Y-filled');
//     updateArray(element, index);
//     vibecheck();
// }


function winCheck() {
    if (arr[0] + arr[3] + arr[6] == 3) {
        XWinConfirm();
    }
    else if (arr[0] + arr[3] + arr[6] == -3) {
        YWinConfirm() 
    }
    else if (arr[1] + arr[4] + arr[7] == 3) {
        XWinConfirm()
    }
    else if (arr[1] + arr[4] + arr[7] == -3) {
        YWinConfirm()
    }
    else if (arr[2] + arr[5] + arr[8] == 3) {
        XWinConfirm()
    }
    else if (arr[2] + arr[5] + arr[8] == -3) {
        YWinConfirm()
    }
    else if (arr[0] + arr[1] + arr[2] == 3) {
        XWinConfirm()
    }
    else if (arr[0] + arr[1] + arr[2] == -3) {
        YWinConfirm()
    }
    else if (arr[3] + arr[4] + arr[5] == 3) {
        XWinConfirm()
    }
    else if (arr[3] + arr[4] + arr[5] == -3) {
        YWinConfirm()
    }
    else if (arr[6] + arr[7] + arr[8] == 3) {
        XWinConfirm()
    }
    else if (arr[6] + arr[7] + arr[8] == -3) {
        YWinConfirm()
    }
    else if (arr[0] + arr[4] + arr[8] == 3) {
        XWinConfirm()

    }
    else if (arr[0] + arr[4] + arr[8] == -3) {
        YWinConfirm()
    }
    else if (arr[6] + arr[4] + arr[2] == 3) {
        XWinConfirm()

    }
    else if (arr[6] + arr[4] + arr[2] == -3) {
        YWinConfirm()
    }

}

const myBtn = document.querySelector('.reset');


myBtn.addEventListener('click', function () {

    arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    buttons.forEach(function(element) {
        element.classList = null;})
    gameOver = false;
});

if (pvp == true ) {
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
                        element.classList.add('y-filled');
                        updateArray(element, index);
                        winCheck();
                        turn = "x"
                        break;
                }
            }
        }
    })
})
}

if (pvp == false ) {
    buttons.forEach((element, index) => {
        buttons[index].addEventListener("click", () => {
            if (arr[index] == 0) {
                if (gameOver == false) {
                    switch (turn) {
                        case "x":
                            element.classList.add('x-filled');
                            updateArray(element, index);
                            vibecheck();
                            turn = 'y';
                            break;
                            x = false
    
                        case "y":
                            element.classList.add('y-filled');
                            updateArray(element, index);
                            vibecheck();
                            turn = "x"
                            break;
                    }
                }
            }
        })
    })
    }

let username1 = document.querySelector(".username1");


username1.onkeydown = function(e) {
   localStorage.setItem('.name1', 'ye').value
    alert(localStorage.getItem('name1'))   

    
} 

console.log(player1)



