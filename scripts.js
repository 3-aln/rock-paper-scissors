console.log("Hello World");

// Randomly return "rock", "paper", or "scissors"
function getComputerChoice() {
  // Get a random number between 0 and 3.
  let randomNum = Math.random() * 3;
  console.log(`randomNum: ${randomNum}`);
  // If number is in [0, 1), choose rock.
  // If number is in [1, 2), choose paper.
  // If number is in [2, 3), choose scissors.
}

getComputerChoice();
