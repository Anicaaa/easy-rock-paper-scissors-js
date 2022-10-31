const computerChoiceDisplay = document.getElementById("computer-choice");
const yourChoiceDisplay = document.getElementById("your-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let yourChoice;
let computerChoice;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    yourChoice = e.target.id;
    yourChoiceDisplay.innerHTML = yourChoice;
    generateComputerChoice();
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
