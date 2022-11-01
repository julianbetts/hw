// 1
// grab the DOM elements we need to manipulate and store them into variables

// 2
// declare and initialize global variables as needed
var words = [
  'window',
  'document',
  'console',
  'event',
  'function',
  'variable',
  'array',
  'object',
];
var winCount = 0;
var lossCount = 0;
var timeLeft = 20;
var timer;
var wordToGuess;
var foundWord;

// 3
// declare an init function for things that need to happen when the page loads/is refreshed
function init() {
  // retrieve wins and losses from local storage
  // update our winCount and lossCount variables
  // display the updated wins and losses on page
}

// 9
// function called when the user wins the game
function userWins() {
  // set text content in div.word-blanks with a 'YOU WIN' message
  // increment winCount and update text content of span.win
  // update local storage with new number for wins
}

// 10
// function called when the user wins the game
function userLosses() {
  // set text content in div.word-blanks with a 'YOU LOST' message
  // increment winLosses and update text content of span.lose
  // update local storage with new number for losses
}

// 8
// function to start the timer and control the flow of the game depending on time left
function startTimer() {
  // initialize timer with setInterval()
  timer = setInterval(function () {
    // decrease time by 1s
    // replace textContent in div.timer-count with timeLeft
    // if there is time left (timeLeft >= 0) and the user has found the word (foundWord === true), then:
    // stop the timer
    // call the function userWins
    // if time is up (timeLeft === 0), then:
    // stop the timer
    // call the function userLoses
  }, 1000);
}

// 7
// function to render blanks for each letter of the word chosen
function renderBlanks() {
  // randomly pick a word from our array of words and update wordToguess variable with it
  // replace text content in div.word-blanks with as many blanks as there are letters in the wordToGuess
}

// 6
// function to start the game when the start button is clicked
function startGame() {
  // initialize foundWord to false
  foundWord = false;
  // render blanks in div with class 'word-blanks'
  renderBlanks();
  // start timer
  startTimer();
}

// 5
// attach event listener to start button and call startGame function upon a click

// 13
// function to check if word has been found
function checkWordFound() {
  // if all letters were found, then:
  // set foundWord variable to true
}

// 12
// function to display letter wherever it appears in wordToGuess
function checkLetter(letter) {
  // check if letter is in wordToGuess
  // if so, then update div.word-blanks with
}

// 11
// attach event listener to document to listen for keydown event and set anonymous callback function so that:
// if timeLeft is 0, exit callback function
// if key pressed is alphabet letter (convert to either lower or upper case for easier comparison), then:
// check if letter is in wordToGuess by calling checkLetter function and passing key pressed as argument
// check if user has found the word by calling function checkWordFound

// 4
// call init() when page loads/is refreshed
init();

// BONUS - functionality to reset the score