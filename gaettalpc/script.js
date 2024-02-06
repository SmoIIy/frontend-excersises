//Variables
let numbers = [];
let numberOfGuesses = 0;
let currentGuess;
//Grap buttons
const buttons = document.querySelectorAll(".button");
const guess = document.querySelector(".guess");

//buttons.addEventListener("click", function()) ){

//}
//Setup 
//Fill array
function fillArray(){
    let numberss = [];
    for (let i = 1; i <= 101; i++){
        numberss.push(i);
    }
    return numberss;
}


//Start game

function startGame(){
    fillArray;
    guess.textContent = produceGuess();
}


//Computer guess
function produceGuess(min = 0, max = 100){
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }
 

let numbersArray = fillArray();
console.log(numberss);


function sliceArray(gæt){
    if (gæt ) {
        numbers.slice(0, gæt);
    } else {
        numbers.slice(gæt, (numbers.length() - gæt));
    }
}

function addGuess(){
    return currentGuess++;
}



