playGame();

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let roundNum = 0;

  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      
      // When a button is clicked, get a new computer selection.
      const computerSelection = getComputerChoice();
      
      // Set humanSelection based on which button was clicked.
      let humanSelection;
      switch (button.id) {
        case "rock-button":
          humanSelection = "rock";
          break;
        case "paper-button":
          humanSelection = "paper";
          break;
        case "scissors-button":
          humanSelection = "scissors";
          break;
      }

      playRound(humanSelection, computerSelection);
    })
  });

  const roundHeading = document.querySelector("#round-heading");
  const roundSelections = document.querySelector("#round-selections");
  const roundResults = document.querySelector("#round-results");

  const humanScorePara = document.querySelector("#human-score-para");
  const computerScorePara = document.querySelector("#computer-score-para");

  updateScoreText();

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    // Display the selections made this round.
    roundSelections.textContent = (`You picked: ${humanChoice}. `);
    roundSelections.textContent += (`The computer picked: ${computerChoice}.`);
  
    roundNum++;
    roundHeading.textContent = `Round ${roundNum} Results`;

    if (humanChoice === computerChoice) {
      // If user and computer picked the same option, tie.
      roundResults.textContent = (`This round is a tie! Both you and the computer picked ${humanChoice}.`);
    } else if (humanChoice === "rock") {
      // If user picked rock, indicate win against scissors and lose against paper.
      if (computerChoice === "scissors") {
        recordWin(humanChoice, computerChoice);
      } else if (computerChoice === "paper") {
        recordLoss(humanChoice, computerChoice);
      }
    } else if (humanChoice === "paper") {
      // If user picked paper, indicate win against rock and lose against scissors.
      if (computerChoice === "rock") {
        recordWin(humanChoice, computerChoice);
      } else if (computerChoice === "scissors") {
        recordLoss(humanChoice, computerChoice);
      }
    } else if (humanChoice === "scissors") {
      // If user picked scissors, indicate win against paper and lose against rock.
      if (computerChoice === "paper") {
        recordWin(humanChoice, computerChoice);
      } else if (computerChoice === "rock") {
        recordLoss(humanChoice, computerChoice);
      }
    }

    updateScoreText();
  }

  function updateScoreText() {
    humanScorePara.textContent = `Your score: ${humanScore}`
    computerScorePara.textContent = `Computer’s score: ${computerScore}`
  }

  // Show text indicating that the player won and increment their score.
  function recordWin(humanChoice, computerChoice) {
    // Capitalize the first letter of the user's choice.
    humanChoice = humanChoice.charAt(0).toUpperCase() +
                  humanChoice.substring(1, humanChoice.length);

    roundResults.textContent = (`You win this round! ${humanChoice} beats ${computerChoice}.`);

    // Increment the user's score.
    humanScore++;
  }

  function recordLoss(humanChoice, computerChoice) {
    // Capitalize the first letter of the computer's choice.
    computerChoice = computerChoice.charAt(0).toUpperCase() +
                  computerChoice.substring(1, computerChoice.length);

    roundResults.textContent = (`You lose this round! ${computerChoice} beats ${humanChoice}.`);

    // Increment the computer's score.
    computerScore++;
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
