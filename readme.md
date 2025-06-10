# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1 - Background Changer

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
console.log(buttons);
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});



```

## project 2 solution - BMI Calculator

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Pleaase Enter a valid height`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Pleaase Enter a valid height`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (result < 18.6) {
      result.innerHTML = `<span>${bmi} Under Weight</span>`;
    } else if (result >= 18.6 && result <= 24.9) {
      result.innerHTML = `<span>${bmi} Normal range</span>`;
    } else {
      result.innerHTML = `<span>${bmi} Overweight</span>`;
    }
  }
});


```

## project 3 solution code - Digital Clock

```javascript
const clock = document.querySelector('#clock');

setInterval(() => {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## project 4 solution - Guess The Number


```javascript

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

```


# Project 5 solution - Keyboard

```javascript
const insert = document.querySelector('#insert');
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
      <div class='color'>
      <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === '' ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
      </div>`;
});


```

# Project 6 Solution - UnlimitedColor

```javascript
//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);


```