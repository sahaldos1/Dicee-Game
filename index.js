//randomly generate first dice
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let dice1 = document.querySelector(".img1");

dice1.setAttribute("src", `images/dice${randomNumber1}.png`);

//randomly generate second dice
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let dice2 = document.querySelector(".img2");

dice2.setAttribute("src", `images/dice${randomNumber2}.png`);

//display winner
let winnerText = document.querySelector("#headingText");

if (randomNumber1 > randomNumber2) {
  winnerText.textContent = "Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
  winnerText.textContent = "Player 2 wins!";
} else {
  winnerText.textContent = "Draw!";
}
