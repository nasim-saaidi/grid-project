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
    let alertName = localStorage.getItem("name");
    alert(alertName + " Won");
    gameOver = true;
}

function YWinConfirm() {
    pointsPlayerO = parseInt(localStorage.getItem("Opoints"));
    pointsPlayerO++
    localStorage.setItem("Opoints", pointsPlayerO);
    console.log(pointsPlayerO);
    console.log(parseInt(localStorage.getItem("Opoints")))
    pointsy.textContent = pointsPlayerO;
    alert(localStorage.getItem(input2.value) +' won');
    gameOver = true;

}

function botPressO() {
    for (let i = 0; i <= arr.length; i++) {
        let botMaths = arr[i];
        console.log(botMaths)
    }
}