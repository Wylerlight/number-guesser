'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    //document.querySelector('.message').textContent = '⛔ No Number';
    displayMessage('⛔ No Number');

    // When player wins
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '🎉Correct Number!';
    displayMessage('🎉Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    // Need to write something like --> if score > highscore, highscore = score, then log that as the new value
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Consolidated code for when guess is not = to secretNumber
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '📈 Too high' : '📉 Too low';
      score--;
      displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }

    // Now that the game works, the below code below looks like it repeats itself. Above this line, consolidate the code for a less-repetitive look(refactored).
    // When guess is too high
    //   } else if (guess > secretNumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = '📈 Too high';
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = '💥 You lost the game!';
    //       document.querySelector('.score').textContent = 0;
    //     }

    //     // When guess is too low
    //   } else if (guess < secretNumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = '📉 Too low';
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = '💥 You lost the game!';
    //       document.querySelector('.score').textContent = 0;
    //     }
  }
});

/*  Challenge to utilize the AGAIN button
1. click the again button
2. reset the score to 20
3. randomize the number to guess
*/
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.backgroundColor = '#eee';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
