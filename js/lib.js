let turn = 'x'
const buttons = document.querySelectorAll(".wrapper > div");
let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let gameOver = false;

firstturn = true
x = true
y = true
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

function switchTurn() {

}

function updateArray(element, index) {
    if (element.classList.contains("x-filled")) {
        arr[index] = 1;
    } else if (element.classList.contains("y-filled")) {
        arr[index] = -1;
    }

}

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

function xwinconfirm() {
    alert("x won")
    gameOver = true
}

function ywinconfirm() {
    alert('y won');
        gameOver = true;
}

function vibecheck() {
    if (arr[0] + arr[3] + arr[6] == 3) {
        xwinconfirm()
    }
    else if (arr[0] + arr[3] + arr[6] == -3) {
        ywinconfirm() 
    }
    else if (arr[1] + arr[4] + arr[7] == 3) {
        xwinconfirm()
    }
    else if (arr[1] + arr[4] + arr[7] == -3) {
        ywinconfirm()
    }
    else if (arr[2] + arr[5] + arr[8] == 3) {
        xwinconfirm()
    }
    else if (arr[2] + arr[5] + arr[8] == -3) {
        ywinconfirm()
    }
    else if (arr[0] + arr[1] + arr[2] == 3) {
        xwinconfirm()
    }
    else if (arr[0] + arr[1] + arr[2] == -3) {
        ywinconfirm()
    }
    else if (arr[3] + arr[4] + arr[5] == 3) {
        xwinconfirm()
    }
    else if (arr[3] + arr[4] + arr[5] == -3) {
        ywinconfirm()
    }
    else if (arr[6] + arr[7] + arr[8] == 3) {
        xwinconfirm()
    }
    else if (arr[6] + arr[7] + arr[8] == -3) {
        ywinconfirm()
    }
    else if (arr[0] + arr[4] + arr[8] == 3) {
        xwinconfirm()

    }
    else if (arr[0] + arr[4] + arr[8] == -3) {
        ywinconfirm()
    }
    else if (arr[6] + arr[4] + arr[2] == 3) {
        xwinconfirm()

    }
    else if (arr[6] + arr[4] + arr[2] == -3) {
        ywinconfirm()
    }

}

const myBtn = document.querySelector('.reset');

myBtn.addEventListener('click', function () {

    arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    buttons.forEach(function(element) {
        element.classList = null;})
    gameOver = false;
});

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

console.log(arr)



console.log()

let username1 = document.querySelector(".username1");

username1.onkeydown = function(e) {

   
        window.localStorage.setItem('username1', username1.textContent);
        alert(window.localStorage.getItem("username1"))
   

    
} 

