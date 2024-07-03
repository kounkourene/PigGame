"use strict";
//Selecting elements
const player0EL = document.querySelector(".player--0");
const player1EL = document.querySelector(".player--1");
const score0EL = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const currentScore0El = document.getElementById("current--0");
const currentScore1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const newGame = document.querySelector(".btn--new");
const rollDice = document.querySelector(".btn--roll");
const holdDice = document.querySelector(".btn--hold");

//Starting conditions
const scores = [0, 0];
score0EL.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
let currentScore = 0;
let activePlayer = 0;

rollDice.addEventListener("click", function () {
  //Generating a random dice
  const randomDice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${randomDice}.png`;

  if (randomDice !== 1) {
    currentScore += randomDice;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0EL.classList.toggle("player--active");
    player1EL.classList.toggle("player--active");
  }
});
