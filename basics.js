function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
const number = getRandomInt(100);
const numberText = document.querySelector(".rnumber");

numberText.textContent = number;



console.log(number);
  
