window.onload = function() {
    document.getElementById('input').value = '';
    }
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
const number = getRandomInt(100);
const numberText = document.querySelector(".rnumber");
const display = document.querySelector("#display");





console.log(number);
function checkNumber(n){
    if (n === number) {
        return n + " er det rigtige tal!";
    } else if(n < number){
        return "Gæt højere"
    } else if(n > number){
        return "Gæt lavere"
    }
}

function parse(){
    let guess = parseInt(document.querySelector("#input").value);
    console.log(guess);
    console.log(checkNumber(guess));
    display.textContent = checkNumber(guess);

}



  
