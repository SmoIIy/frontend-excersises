//Variables
let numberOfGuesses = 0;
let currentGuess;
let numbersArray
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
    console.log(numberss);
    return numberss;
}

//Start game
function startGame(){
    numbersArray = fillArray();
    currentGuess = produceGuess();
    guess.textContent = currentGuess;
    console.log(sliceDown());
}

//Test 
function sliceDown(){
    console.log(numbersArray.slice(0, currentGuess));
    return numbersArray.slice(0, currentGuess);
}


//Computer guess
function produceGuess(min = 0, max = 100){
    return Math.floor(Math.random() * (max - min + 1)) + min;
 }
 




function calculateArray(value){
    if (value === "Lavere") {
        
    } else if (value === "Højere"){

    } else {

    }
}
function sliceArray(gæt){

}

function addGuess(){
    return currentGuess++;
}



