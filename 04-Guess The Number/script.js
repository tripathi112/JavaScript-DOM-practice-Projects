let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const startOver = document.querySelector('.resultParas');
const guessSlots = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const p = document.createElement('p');

let preavGuess = [];
let totalGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateNumber(guess);
  });
}

function validateNumber(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert(`Please Enter a Valid Number between 1 to 100`);
  } else {
    preavGuess.push(guess);
    if (totalGuess === 11) {
      displayGuess(guess);
      displayMsg(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  if (guess === randomNumber) {
    displayMsg(`You Guessde It Right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMsg(`Number is Too Low`);
  } else if (guess > randomNumber) {
    displayMsg(`Number is Too High`);
  }
}

function displayMsg(msg) {
  lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlots.innerHTML += `${guess},    `;
  totalGuess++;
  remaining.innerHTML = `${11 - totalGuess}`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id ="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newgamebtn = document.querySelector('#newGame');
  newgamebtn.addEventListener('click', (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    preavGuess = [];
    totalGuess = 1;
    guessSlots.innerHTML = '';
    remaining.innerHTML = `${11 - totalGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
