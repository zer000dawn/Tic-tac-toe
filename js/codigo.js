//cuadros de juego
let cuadro1 = document.querySelector("#sqr1");
let cuadro2 = document.querySelector("#sqr2");
let cuadro3 = document.querySelector("#sqr3");
let cuadro4 = document.querySelector("#sqr4");
let cuadro5 = document.querySelector("#sqr5");
let cuadro6 = document.querySelector("#sqr6");
let cuadro7 = document.querySelector("#sqr7");
let cuadro8 = document.querySelector("#sqr8");
let cuadro9 = document.querySelector("#sqr9");
//cuadros de juego

//mecanica de juego
cuadro1.addEventListener("click", playOne);
cuadro2.addEventListener("click", playTwo);
cuadro3.addEventListener("click", playThree);
cuadro4.addEventListener("click", playFour);
cuadro5.addEventListener("click", playFive);
cuadro6.addEventListener("click", playSix);
cuadro7.addEventListener("click", playSeven);
cuadro8.addEventListener("click", playEight);
cuadro9.addEventListener("click", playNine);

window.addEventListener("click", victory);
//mecanica de juego

let title = document.querySelector("h1");
let turno = 1;
let mark = 'X'
let order = "Player " + turno + "'s turn"
let win = 0;
let winner = "Draw";
let blink = 1;
title.innerHTML = order;

function victory() {
    //victorias horizontales
    if ((cuadro1.innerHTML == 'X' || cuadro1.innerHTML == 'O') && (cuadro1.innerHTML == cuadro2.innerHTML && cuadro1.innerHTML == cuadro3.innerHTML)) {
        win = 1;
        changeTurn();
        winner = "Player " + turno + " wins!"
        alert(winner);
        stopGame();
        
    } else if ((cuadro4.innerHTML == 'X' || cuadro4.innerHTML == 'O') && (cuadro4.innerHTML == cuadro5.innerHTML && cuadro4.innerHTML == cuadro6.innerHTML)) {
        win = 1;
        changeTurn();
        winner = "Player " + turno + " wins!"
        alert(winner);
        stopGame();
    } else if ((cuadro7.innerHTML == 'X' || cuadro7.innerHTML == 'O') && (cuadro7.innerHTML == cuadro8.innerHTML && cuadro7.innerHTML == cuadro9.innerHTML)) {
        win = 1;
        changeTurn();
        winner = "Player " + turno + " wins!"
        alert(winner);
        stopGame();
        //victorias horizontales
        //victorias verticales
    } else if ((cuadro1.innerHTML == 'X' || cuadro1.innerHTML == 'O') && (cuadro1.innerHTML == cuadro4.innerHTML && cuadro1.innerHTML == cuadro7.innerHTML)) {
        win = 1;
        changeTurn();
        winner = "Player " + turno + " wins!"
        alert(winner);
        stopGame();
    } else if ((cuadro2.innerHTML == 'X' || cuadro2.innerHTML == 'O') && (cuadro2.innerHTML == cuadro5.innerHTML && cuadro2.innerHTML == cuadro8.innerHTML)) {
        win = 1;
        changeTurn();
        winner = "Player " + turno + " wins!"
        alert(winner);
        stopGame();
    } else if ((cuadro3.innerHTML == 'X' || cuadro3.innerHTML == 'O') && (cuadro3.innerHTML == cuadro6.innerHTML && cuadro3.innerHTML == cuadro9.innerHTML)) {
        win = 1;
        changeTurn();
        winner = "Player " + turno + " wins!"
        alert(winner);
        stopGame();
        //victorias verticales
        //victorias diagonales
    } else if ((cuadro1.innerHTML == 'X' || cuadro1.innerHTML == 'O') && (cuadro1.innerHTML == cuadro5.innerHTML && cuadro1.innerHTML == cuadro9.innerHTML)) {
        win = 1;
        changeTurn();
        winner = "Player " + turno + " wins!"
        alert(winner);
        stopGame();
    } else if ((cuadro3.innerHTML == 'X' || cuadro3.innerHTML == 'O') && (cuadro3.innerHTML == cuadro5.innerHTML && cuadro3.innerHTML == cuadro7.innerHTML)) {
        win = 1;
        changeTurn();
        winner = "Player " + turno + " wins!"
        alert(winner);
        stopGame();
        //victorias diagonales
        //empate
    } else if ((cuadro1.innerHTML == 'X' || cuadro1.innerHTML == 'O') && (cuadro2.innerHTML == 'X' || cuadro2.innerHTML == 'O') && (cuadro3.innerHTML == 'X' || cuadro3.innerHTML == 'O') && (cuadro4.innerHTML == 'X' || cuadro4.innerHTML == 'O') && (cuadro5.innerHTML == 'X' || cuadro5.innerHTML == 'O') && (cuadro6.innerHTML == 'X' || cuadro6.innerHTML == 'O') && (cuadro7.innerHTML == 'X' || cuadro7.innerHTML == 'O') && (cuadro8.innerHTML == 'X' || cuadro8.innerHTML == 'O') && (cuadro9.innerHTML == 'X' || cuadro9.innerHTML == 'O')) {
        win = 1;
        alert(winner)
        stopGame();
    } else { }
}

function stopGame() {
    cuadro1.removeEventListener("click", playOne);
    cuadro2.removeEventListener("click", playTwo);
    cuadro3.removeEventListener("click", playThree);
    cuadro4.removeEventListener("click", playFour);
    cuadro5.removeEventListener("click", playFive);
    cuadro6.removeEventListener("click", playSix);
    cuadro7.removeEventListener("click", playSeven);
    cuadro8.removeEventListener("click", playEight);
    cuadro9.removeEventListener("click", playNine);

    window.removeEventListener("click", victory);
}

function changeTurn(){
    if (turno == 1) {
        turno++;
        order = "Player " + turno + "'s turn"
        title.innerHTML = order;
        mark = 'O'
    } else {
        turno--;
        order = "Player " + turno + "'s turn"
        title.innerHTML = order;
        mark = 'X'
    }
}


function playOne() {
    changeTurn();
    cuadro1.innerHTML = mark;
    if (mark == 'O') {
        cuadro1.setAttribute("class", "border-bottom border-end border-white text-primary");
    } else {
        cuadro1.setAttribute("class", "border-bottom border-end border-white text-danger");
    }
}

function playTwo() {
    changeTurn();
    cuadro2.innerHTML = mark;
    if (mark == 'O') {
        cuadro2.setAttribute("class", "border-bottom border-end border-white text-primary");
    } else {
        cuadro2.setAttribute("class", "border-bottom border-end border-white text-danger");
    }
}

function playThree() {
    changeTurn();
    cuadro3.innerHTML = mark;
    if (mark == 'O') {
        cuadro3.setAttribute("class", "border-bottom border-white text-primary");
    } else {
        cuadro3.setAttribute("class", "border-bottom border-white text-danger");
    }
}
function playFour() {
    changeTurn();
    cuadro4.innerHTML = mark;
    if (mark == 'O') {
        cuadro4.setAttribute("class", "border-bottom border-end border-white text-primary");
    } else {
        cuadro4.setAttribute("class", "border-bottom border-end border-white text-danger");
    }
}

function playFive() {
    changeTurn();
    cuadro5.innerHTML = mark;
    if (mark == 'O') {
        cuadro5.setAttribute("class", "border-bottom border-end border-white text-primary");
    } else {
        cuadro5.setAttribute("class", "border-bottom border-end border-white text-danger");
    }
}
function playSix() {
    changeTurn();
    cuadro6.innerHTML = mark;
    if (mark == 'O') {
        cuadro6.setAttribute("class", "border-bottom border-white text-primary");
    } else {
        cuadro6.setAttribute("class", "border-bottom border-white text-danger");
    }
}
function playSeven() {
    changeTurn();
    cuadro7.innerHTML = mark;
    if (mark == 'O') {
        cuadro7.setAttribute("class", "border-end border-white text-primary");
    } else {
        cuadro7.setAttribute("class", "border-end border-white text-danger");
    }
}
function playEight() {
    changeTurn();
    cuadro8.innerHTML = mark;
    if (mark == 'O') {
        cuadro8.setAttribute("class", "border-end border-white text-primary");
    } else {
        cuadro8.setAttribute("class", "border-end border-white text-danger");
    }
}
function playNine() {
    changeTurn();
    cuadro9.innerHTML = mark;
    if (mark == 'O') {
        cuadro9.setAttribute("class", "text-primary");
    } else {
        cuadro9.setAttribute("class", "text-danger");
    }
}