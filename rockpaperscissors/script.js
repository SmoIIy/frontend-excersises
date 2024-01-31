//Variables
const buttons = document.querySelector("#buttons");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const texts = document.querySelector("#texts");
const winText = document.querySelector("#win");
const loseText = document.querySelector("#lose");
const drawText = document.querySelector("#draw");
let playerschoice;
let computerschoice;

//Knapper eventlisterners
buttons.addEventListener("click", function (e){
    //console.log(e.target.className);
    if (e.target.className == "rock") {
        playerschoice = "rock";
    } else if (e.target.className == "paper") {
        playerschoice = "paper";
    } else if (e.target.className == "scissors") {
        playerschoice = "scissors";
    }
    console.log("playerschoice is " + playerschoice);

    computerChoose();
    addShake();
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
    buttons.classList.add("hidden");
    if (playerschoice === computerschoice) {
        console.log("draw")
        return "draw";
    } else if((playerschoice === "rock" && computerschoice === "scissors") || (playerschoice === "paper" && computerschoice === "rock") || (playerschoice === "scissors" && computerschoice === "paper")  ){
        console.log("win")
        return "win";
    } else {
        console.log("loss")
        return "lose";
    }
    
}

function addShake(){
    player1.classList.add("shake");
    player2.classList.add("shake");
    console.log("AddShake")
}

function reset(){
    buttons.classList.remove("hidden");
    player1.classList.remove("shake", "scissors", "rock", "paper");
    player2.classList.remove("shake", "scissors", "rock", "paper");
    winText.classList.add("hidden");
    loseText.classList.add("hidden");
    drawText.classList.add("hidden");
    playerschoice = "";
    computerschoice = "";
    console.log("Reset");
}

player1.addEventListener("animationend", function(){
    playGame();
    if (playGame() === "win") {
        winText.classList.remove("hidden");
    } else if (playGame() === "lose") {
        loseText.classList.remove("hidden");
    } else if (playGame() === "draw"){
        drawText.classList.remove("hidden");
    }
    console.log("PlayGame")
})

onkeyup = (e) => {
    console.log(e);
    if (e.key === " ") {
        reset();
    }
}

window.onload = (event) =>{
    reset();
}

