function updateArray(element, index) {
    if (element.classList.contains("x-filled")) {
        arr[index] = 1;
    } else if (element.classList.contains("y-filled")) {
        arr[index] = -1;
    }

}

function XWinConfirm() {
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

function YWinConfirm() {
    pointsPlayerO = parseInt(localStorage.getItem("Opoints"));
    pointsPlayerO++
    localStorage.setItem("Opoints", pointsPlayerO);
    console.log(pointsPlayerO);
    console.log(parseInt(localStorage.getItem("Opoints")))
    pointsy.textContent = pointsPlayerO;
    alert(window.localStorage.getItem('playerTwoName') +' won');
    gameOver = true;

}


    function generateRandomNumber() {
        return Math.round(Math.random() * 9);
    }

function botPressO() {
    let randomMove = -1;
  while(arr[randomMove] =! 0) {
    randomMove = generateRandomNumber
  };
  arr[randomMove] = -1;

  updateArray
}