function updateArray(element, index) {
    if (element.classList.contains("x-filled")) {
        arr[index] = 1;
    } else if (element.classList.contains("y-filled")) {
        arr[index] = -1;
    }

}

function xWinConfirm() {
    pointsPlayerX = parseInt(localStorage.getItem("Xpoints"));
    pointsPlayerX++;
    localStorage.setItem("Xpoints", pointsPlayerX);
    console.log(pointsPlayerX);
    console.log(parseInt(localStorage.getItem("Xpoints")));
    pointsX.textContent = pointsPlayerX;
    if (window.localStorage.getItem('playerOneName' ) == '') {
        alert("player X won")
    }
    else {
    alert(window.localStorage.getItem('playerOneName') +' won')}
    gameOver = true;
}

function yWinConfirm() {
    pointsPlayerO = parseInt(localStorage.getItem("Opoints"));
    pointsPlayerO++
    localStorage.setItem("Opoints", pointsPlayerO);
    console.log(pointsPlayerO);
    console.log(parseInt(localStorage.getItem("Opoints")))
    pointsY.textContent = pointsPlayerO;
    if (window.localStorage.getItem('playerTwoName' ) == '') {
        alert("player Y won")
    }
    else {
    alert(window.localStorage.getItem('playerTwoName') +' won')};
    gameOver = true;

}


    function generateRandomNumber() {
        return Math.round(Math.random() * 9);
    }

function botPressO() {
    let randomMove = -1;
  while(arr[randomMove] != 0) {
    randomMove = generateRandomNumber();
  };
  arr[randomMove] = -1;
  buttons[randomMove].classList.add("y-filled");
}

// array = [1, 2, 4, 6, 123];

// array[0] = 1;

// array[4] = 123;