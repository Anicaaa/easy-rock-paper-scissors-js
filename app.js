const computerChoiceDisplay = document.getElementById("computer-choice");
const yourChoiceDisplay = document.getElementById("your-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let yourChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    yourChoice = e.target.id;
    yourChoiceDisplay.innerHTML = yourChoice;
    generateComputerChoice();
    generateResult();
  })
);

function generateComputerChoice() {
  const randomComputerChoice = Math.floor(Math.random() * 3) + 1;

  if (randomComputerChoice === 1) {
    computerChoice = "rock";
  }
  if (randomComputerChoice === 2) {
    computerChoice = "paper";
  }
  if (randomComputerChoice === 3) {
    computerChoice = "scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function generateResult() {
  if (computerChoice === yourChoice) {
    result = "It's a tie!";
  }
  if (computerChoice === "rock" && yourChoice === "paper") {
    result = "You win!";
  }
  if (computerChoice === "rock" && yourChoice === "scissors") {
    result = "You lose!";
  }
  if (computerChoice === "paper" && yourChoice === "rock") {
    result = "You lose!";
  }
  if (computerChoice === "paper" && yourChoice === "scissors") {
    result = "You win!";
  }
  if (computerChoice === "scissors" && yourChoice === "rock") {
    result = "You win!";
  }
  if (computerChoice === "scissors" && yourChoice === "paper") {
    result = "You lose!";
  }
  resultDisplay.innerHTML = result;
}
