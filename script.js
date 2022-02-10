(function () {
  'use strict';
  // this function is strict...
})();

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let obtainedScore = 20;
let highScore = 0;

const messageFunction = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const inputnumber = Number(document.querySelector('.inputnumber').value);
  console.log(inputnumber, typeof inputnumber);

  if (!inputnumber) {
    messageFunction('⛔️ Please input some number(1️⃣ - 2️⃣0️⃣)');
  } else if (inputnumber === secretNumber) {
    messageFunction('You Won 🏆, guessed Correct Value 🎉');
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#0DF74D';
    document.querySelector('.question').style.width = '50rem';

    if (obtainedScore > highScore) {
      highScore = obtainedScore;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (inputnumber !== secretNumber) {
    if (obtainedScore > 1) {
      messageFunction(
        inputnumber > secretNumber
          ? 'Number you entered is higher📈'
          : 'Number you entered is lower📉'
      );
      obtainedScore--;
      document.querySelector('.score').textContent = obtainedScore;
    } else {
      messageFunction('🥲 You lost the game!! 💣');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#F41A0C';
    }
  }
});

document.querySelector('.buttonreset').addEventListener('click', function () {
  obtainedScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  messageFunction('Start Guessing 🤔');
  document.querySelector('.score').textContent = obtainedScore;
  document.querySelector('.question').textContent = '?';
  document.querySelector('.inputnumber').value = '';
  document.querySelector('body').style.backgroundColor = '#2BA6BA';
  document.querySelector('.question').style.width = '50rem';
});
