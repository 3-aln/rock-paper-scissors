let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  console.log(`         You picked: ${humanChoice}.`);
  console.log(`The computer picked: ${computerChoice}.`);

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
  } else if (humanChoice === "paper") {
    // If user picked paper, indicate win against rock and lose against scissors.
    if (computerChoice === "rock") {
      console.log("You win! Paper beats rock.");
    } else if (computerChoice === "scissors") {
      console.log("You lose! Scissors beats paper.");
    }
  } else if (humanChoice === "scissors") {
    // If user picked scissors, indicate win against paper and lose against rock.
    if (computerChoice === "paper") {
      console.log("You win! Scissors beats paper.");
    } else if (computerChoice === "rock") {
      console.log("You lose! Rock beats scissors.");
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

// Show text indicating that the player won and increment their score.
function printWin(humanChoice, computerChoice) {
  // Capitalize the first letter of the user's choice.
  humanChoice = humanChoice.charAt(0).toUpperCase() +
                humanChoice.substring(1, humanChoice.length);

  console.log(`You win! ${humanChoice} beats ${computerChoice}.`);

  // Increment the user's score.
  humanScore++;
}
