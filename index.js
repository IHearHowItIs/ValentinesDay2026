function changeDice(){
    var randomNumber1 = Math.random();
    randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

    document.querySelector(".img1").setAttribute("src", "./images/picture" + randomNumber1 + ".png");

    var randomNumber2 = Math.random();
    randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

    document.querySelector(".img2").setAttribute("src", "./images/picture" + randomNumber2 + ".png");

    var winner = "";
    if(randomNumber1 > randomNumber2){
        winner = "Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2){
        winner = "Player 2 Wins!";
    } else {
        winner = "DRAW!";
    }
}

setInterval(changeDice, 2250);


