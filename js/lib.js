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
    alert("x won");
    gameOver = true;
    

}

function YWinConfirm() {
    pointsPlayerO = parseInt(localStorage.getItem("Opoints"));
    pointsPlayerO++
    localStorage.setItem("Opoints", pointsPlayerO);
    console.log(pointsPlayerO);
    console.log(parseInt(localStorage.getItem("Opoints")))
    pointsy.textContent = pointsPlayerO;
    alert('y won');
    gameOver = true;

}

function botPressO() {
    for (let i = -1; i < arr.length; i++) {
        const botMaths = arr[i];
        console.log(botMaths)
        // if(arr.contains(0)) {
        // element.classList.add('y-filled')    
        // }
    }
}