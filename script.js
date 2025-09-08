"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const storagedHighScore = "highscore";

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

if (localStorage.getItem(storagedHighScore)) {
  highScore = parseInt(localStorage.getItem(storagedHighScore));
  document.querySelector(".highscore").textContent = highScore;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("No number!");
  } else if (guess === secretNumber) {
    displayMessage("Correct number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
      localStorage.setItem(storagedHighScore, highScore.toString());
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
    } else {
      score--;
      document.querySelector(".score").textContent = score;
      displayMessage("Game over!");
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  location.reload();
});
