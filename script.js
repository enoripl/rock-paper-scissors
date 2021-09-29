let playerScore = 0;
let computerScore = 0;
let roundWinner = ``;
const showScore = document.querySelector("#scoreArea");

// write function to choose computers move. Return random item from three items
function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Scissors";
  } else {
    return "Paper";
  }
}
// one round of the game.
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = `tie`;
    showScore.textContent = `${playerSelection} vs ${computerSelection}.\r\n It's a tie! \r\n Score is You: ${playerScore}, Computer: ${computerScore}`;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    roundWinner = `player`;
    playerScore++;
    showScore.textContent = `${playerSelection} beats ${computerSelection}.\r\n You've won! \r\n Score is You: ${playerScore}, Computer: ${computerScore}`;
  } else {
    roundWinner = `computer`;
    computerScore++;
    showScore.textContent = `${playerSelection} loses to ${computerSelection}.\r\n You've lost! \r\n Score is You: ${playerScore}, Computer: ${computerScore}`;
  }
}

// function displayWinner() {
//   if (roundWinner === `player`) {
//     console.log(
//       `You've won! Score is You: ${playerScore}, Computer: ${computerScore}`
//     );
//   } else if (roundWinner === `computer`) {
//     console.log(
//       `You've lost! Score is You: ${playerScore}, Computer: ${computerScore}`
//     );
//   } else if (roundWinner === `tie`) {
//     console.log(
//       `It's a tie! Score is You: ${playerScore}, Computer: ${computerScore}`
//     );
//   }
// }

// function game() {
//   let playerSelection = playerPlay();
//   let computerSelection = computerPlay();
//   playRound(playerSelection, computerSelection);
//   displayWinner();
// }

const rockSelected = document.querySelector("#rockButton");
rockButton.addEventListener("click", () => {
  let computerSelection = computerPlay();
  computerPlay();
  playRound("Rock", computerSelection);
  checkEndGame();
});

const paperSelected = document.querySelector("#paperButton");
paperButton.addEventListener("click", () => {
  let computerSelection = computerPlay();
  computerPlay();
  playRound("Paper", computerSelection);
  checkEndGame();
});

const scissorsSelected = document.querySelector("#scissorsButton");
scissorsButton.addEventListener("click", () => {
  let computerSelection = computerPlay();
  computerPlay();
  playRound("Scissors", computerSelection);
  checkEndGame();
});

function checkEndGame() {
  if (playerScore === 5) {
    alert(
      `You've won the game!\n Final score is - You: ${playerScore}, Computer: ${computerScore}`
    );
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    alert(
      `You've lost the game!\n Final score is - You: ${playerScore}, Computer: ${computerScore}`
    );
    playerScore = 0;
    computerScore = 0;
  }
}

// let i = 0;

// do {
//   if (i < 5) {
//     game();
//   } else {
//     endGame();
//   }

//   i++;
// } while (i < 6)
