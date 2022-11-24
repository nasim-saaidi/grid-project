let turn = 'x'
const buttons = document.querySelectorAll(".wrapper > div");
let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];

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

function vibecheck() {
    if (arr[0] + arr[3] + arr[6] == 3) {
        alert('x won');
        let confirm = confirm("wil je opniew beginnen?");
        function replay() {
            
        }
    }
    else if (arr[0] + arr[3] + arr[6] == -3) {
        alert('y won');
    }
    else if (arr[1] + arr[4] + arr[7] == 3) {
        alert('x won');
    }
    else if (arr[1] + arr[4] + arr[7] == -3) {
        alert('Y won');
    }
    else if (arr[2] + arr[5] + arr[8] == 3) {
        alert('x won');
    }
    else if (arr[2] + arr[5] + arr[8] == -3) {
        alert('Y won');
    }
    else if (arr[0] + arr[1] + arr[3] == 3) {
        alert('X won')
    }
    else if (arr[0] + arr[1] + arr[3] == -3) {
        alert('Y won')
    }
    else if (arr[3] + arr[4] + arr[5] == 3) {
        alert('X won')
    }
    else if (arr[3] + arr[4] + arr[5] == -3) {
        alert('Y won')
    }
    else if(arr[6] + arr[7] + arr[8] == 3) {
        alert('X won')
    }
    else if(arr[6] + arr[7] + arr[8] == -3) {
        alert("Y won")

    }
    else if(arr[0] + arr[4] + arr[8] == 3) {
        alert('X won')
    }
    else if(arr[0] + arr[4] + arr[8] == -3) {
        alert('Y won')
    }
    else if(arr[7] + arr[4] + arr[2] == 3) {
        alert('X won')
    }
    else if(arr[7] + arr[4] + arr[2] == -3) {
        alert('Y won')
    }

}
buttons.forEach((element, index) => {
    buttons[index].addEventListener("click", () => {
        switch (turn) {
            case "x":
                element.classList.add('x-filled');
                updateArray(element, index);
                vibecheck();
                turn = 'y';
                break;
            case "y":
                element.classList.add('y-filled');
                updateArray(element, index);
                vibecheck();
                turn = "x"
                break;
        }
    })
});
console.log(arr)
