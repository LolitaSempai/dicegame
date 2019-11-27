function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
let player = document.querySelector(".player");
let computer = document.querySelector(".computer");
document.querySelector(".button").addEventListener('click', item=>{
let firstPlayerDice = randomInteger(1,6);
let secondPlayerDice = randomInteger(1,6);
let firstCompDice = randomInteger(1,6);
let secondCompDice = randomInteger(1,6);
player.innerHTML = "<b>Player:</b>"
computer.innerHTML = "<b>Computer:</b>"
let playerResult = " " + firstPlayerDice + " and " + secondPlayerDice;
player.insertAdjacentHTML('beforeend', playerResult);
let compResult = " " + firstCompDice + " and " + secondCompDice;
computer.insertAdjacentHTML('beforeend', compResult);
let a = firstPlayerDice + secondPlayerDice;
let b = firstCompDice + secondCompDice;
if(a>b){
    alert('You win');
} else{
    if(a<b) {
        alert('You lose')
    } else  {
        if(a===b){
            alert('No one wins or lose');
        }
    }
}
});