console.log("Connected!");

/*
GAME FUNCTION:
-Player must guess a number between nim and max
-Player gets a certain amount of guesses
-Notify player of guesses left
-Let the player know the answer if loses
-Allow player to rest game
*/

// set game values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

// set UI Elements
const game = document.querySelector(".game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;
