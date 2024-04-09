'use strict';

// Selectors

const againBtn = document.querySelector('.again');

const checkBtn = document.querySelector('.check');

const secretNumberBox = document.querySelector('.number');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Parameters

let score = 20;
let highScore = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

const arrayOfNumbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const calculateAndDisplayScore = function () {
  score--;
  document.querySelector('.score').textContent = score;

  if (score < 1) {
    displayMessage('💥 You lost the game!');
    document.querySelector('.score').textContent = 0;
  }
};

const enterAndCheckbtnFunctionality = function () {
  const guess = Number(document.querySelector('.guess').value);

  if (arrayOfNumbers.includes(guess)) {
    // player wins

    if (guess === secretNumber) {
      displayMessage('🎉 Correct Number!');
      document.querySelector('.number').textContent = secretNumber;
      document.body.classList.add('win');
      secretNumberBox.classList.add('secret-number-box');

      score > highScore ? (highScore = score) : highScore;

      document.querySelector('.highscore').textContent = highScore;

      // guess is too low
    } else if (guess < secretNumber) {
      displayMessage('📉 Too low!');
      calculateAndDisplayScore();

      // guess is too high
    } else if (guess > secretNumber) {
      displayMessage('📈 Too high!');
      calculateAndDisplayScore();
    }
    // wrong input
  } else {
    displayMessage('Oops! wrong input. Choose a number between 1 and 20. 😉');
  }
};

// Check button functionality

checkBtn.addEventListener('click', function () {
  enterAndCheckbtnFunctionality();
});

// Enter keypress functionality

document.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    enterAndCheckbtnFunctionality();
  }
});

// Again button functionality

againBtn.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.body.classList.remove('win');
  secretNumberBox.classList.remove('secret-number-box');
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
});
