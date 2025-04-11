let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  console.log(humanChoice);
  console.log(computerChoice);

  if (humanChoice === computerChoice) {
    // If user and computer picked the same option, tie.
    console.log(`Tie! Both you and the computer picked ${humanChoice}.`);
  } else if (humanChoice === "rock") {
    // If user picked rock, indicate win against scissors and lose against paper.
    if (computerChoice === "scissors") {
      console.log("You win! Rock beats scissors.");
    } else if (computerChoice === "paper") {
      console.log("You lose! Paper beats rock.");
    }
  }
}

// Randomly return "rock", "paper", or "scissors".
function getComputerChoice() {
  // Get a random number between 0 and 3.
  let randomNum = Math.random() * 3;

  if (0 <= randomNum && randomNum < 1) {
    // If number is in [0, 1), choose rock.
    return "rock";
  } else if (1 <= randomNum && randomNum < 2) {
    // If number is in [1, 2), choose paper.
    return "paper";
  } else {
    // If number is in [2, 3), choose scissors.
    return "scissors";
  }
}

// Get a choice from the user.
function getHumanChoice() {
  // Prompt user and return their choice.
  // Note: for now, assumes user always enters a valid choice.
  return prompt("Rock, paper, or scissors?");
}
