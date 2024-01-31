//Variables
const buttons = document.querySelector("#buttons");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const winText = document.querySelector("#win");
const loseText = document.querySelector("#lose");
const drawText = document.querySelector("#draw");
let playerschoice;
let computerschoice;

//Knapper eventlisterners
buttons.addEventListener("click", function (e){
    console.log(e.target.className);

    if (e.target.className == "rock") {
        playerschoice = "rock";
    } else if (e.target.className == "paper") {
        playerschoice = "paper";
    } else if (e.target.className == "scissors") {
        playerschoice = "scissors";
    }
    console.log("playerschoice is " + playerschoice);

    computerChoose();
    playGame();
});

function computerChoose(){
    let number = Math.floor(Math.random() * 3);
    if (number == 0) {
        computerschoice = "rock";
    } else if (number == 1){
        computerschoice = "paper";
    } else if (number == 2){
        computerschoice = "scissors";
    } 
    console.log("Computerchoice is " + computerschoice);
    return computerschoice;
}

function playGame(){
    if (playerschoice === computerschoice) {
        console.log("draw")
    } else if((playerschoice === "rock" && computerschoice === "scissors") || (playerschoice === "paper" && computerschoice === "rock") || (playerschoice === "scissors" && computerschoice === "paper")  ){
        console.log("win")
    } else {
        console.log("loss")
    }
}