function updateArray(element, index) {
    if (element.classList.contains("x-filled")) {
        arr[index] = 1;
    } else if (element.classList.contains("y-filled")) {
        arr[index] = -1;
    }

}

function XWinConfirm() {
    pointsPlayerX++;
    pointsX.textContent = pointsPlayerX;
    alert("x won")
    gameOver = true
    
}

function YWinConfirm() {
    pointsPlayerO++;
    pointsy.textContent = pointsPlayerO;
    alert('y won');
        gameOver = true;
}

function botPressO() {
    Math.round(Math.random() * arr.length);
    element.classList.add('y-filled');
}