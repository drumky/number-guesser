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
  winningNum = Math.floor(Math.random() * 10 + 1),
  guessesLeft = 3;

console.log(winningNum);
// set UI Elements
const game = document.querySelector(".game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener("mousedown", function(e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// Listen for guess input
guessBtn.addEventListener("click", function() {
  let guess = parseInt(guessInput.value);

  // validation
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}.`, "red");
  }

  // Check if won
  if (guess === winningNum) {
    //Good Game, you won~~!

    gameOver(true, `${winningNum} is correct, YOU WIN!`);
  } else {
    //Wrong number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // Good Game, you lost!

      gameOver(
        false,
        `Good game, you lost. The correct number is ${winningNum}.`
      );
    } else {
      // Game continues even when answer is wrong

      // Change border color
      guessInput.style.borderColor = "red";
      // Clear input
      guessInput.value = "";

      // Tell user that input is wrong number
      setMessage(
        `${guess} is incorrect, try again. You have ${guessesLeft} chances left.`,
        "red"
      );
    }
  }
});

// Game Over function
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");

  // Disable input
  guessInput.disabled = true;
  // Change input border to green to show user won
  guessInput.style.borderColor = color;
  message.style.color = color;
  // Set message
  setMessage(msg);

  // Play again(creating new element)
  guessBtn.value = "Play again";
  guessBtn.className += "play-again";
}

// set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
