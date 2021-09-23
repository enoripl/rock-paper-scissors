let playerScore = 0;
let computerScore = 0;
let roundWinner = ``;

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
// function for player prompt
function playerPlay() {
  let playerChoice = prompt("Rock, paper or scissors?");
  if (playerChoice.toUpperCase() === "rock".toUpperCase())
    {
        return "Rock";
    }
    else if (playerChoice.toUpperCase() === "paper".toUpperCase())
    {
        return "Paper";
    }
    else if (playerChoice.toUpperCase() === "scissors".toUpperCase())
    {
        return "Scissors";
    }
}

// one round of the game.
function playRound(playerSelection, computerSelection) {
  if
    (playerSelection === computerSelection) {
    roundWinner = `tie`;
    console.log(`${playerSelection} vs ${computerSelection} It's a tie!`)
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    roundWinner = `player`;
    playerScore++;
    console.log(`${playerSelection} beats ${computerSelection} You've won!`)
  } else {
    roundWinner = `computer`;
    computerScore++;
    console.log(`${playerSelection} loses to ${computerSelection} You've lost!`)
  }
}

function displayWinner() {
  if (roundWinner === `player`) {
   console.log(`You've won! Score is You: ${playerScore}, Computer: ${computerScore}`);
  } else if (roundWinner === `computer`) {
    console.log(`You've lost! Score is You: ${playerScore}, Computer: ${computerScore}`);
   } else if (roundWinner === `tie`) {
     console.log(`It's a tie! Score is You: ${playerScore}, Computer: ${computerScore}`);
   }
}

function game(){
  let playerSelection = playerPlay();
  let computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  displayWinner();
}

function endGame() {
  if (playerScore > computerScore) {
    console.log(`It's been 5 rounds, You've won!`)
  } else if (playerScore < computerScore) {
    console.log(`It's been 5 rounds, Computer have won!`)
  } else {
    console.log(`It's been 5 rounds and it's a tie!`)
  }
}
game();
game();
game();
game();
game();
endGame();