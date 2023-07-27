'use strict';

let displayNumber = document.querySelector('.number'); // this is where on winning will display the number
let inputValue = document.querySelector('.guess'); //input field
let checkbtn = document.querySelector('.check'); // check button
let displayMessage = document.querySelector('.message');
let displayScore = document.querySelector('.score');
let displayHighScore = document.querySelector('.highscore');
let randomNumber;
let x;

let score = 20;

const comparison = function () {
  if (x > 20 || x < 1) {
     displayMessage.textContent = 'Please enter number between 1 to 20';
  } else {
    if (x < randomNumber) {
       displayMessage.textContent = 'too low';
    } else if (x == randomNumber) {
       
        displayMessage.textContent = 'You are a Winner 🥇🎉';
        displayHighScore.textContent = score;
        document.querySelector('body').style.backgroundColor = '#60b347';
        displayNumber.textContent = randomNumber;
      
    } else {
       displayMessage.textContent = 'too High';
    }
  }
};

randomNumber = Math.trunc(Math.random() * 20 + 1);
console.log(randomNumber);

checkbtn.addEventListener('click', function () {
  x = Number(inputValue.value);
  comparison();
  displayScore.textContent = score--;
});
