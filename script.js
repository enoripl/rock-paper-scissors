let playerScore = 0;
let computerScore = 0;
const scoreArea = document.querySelector("#scoreArea");
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
// one round of the game.
function playRound(playerSelection, computerSelection) 
{
  if (playerSelection === computerSelection) {
    roundWinner = `tie`;
    showScore (playerSelection, computerSelection);
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    roundWinner = `player`;
    playerScore++;
    showScore (playerSelection, computerSelection);
  } else {
    roundWinner = `computer`;
    computerScore++;
    showScore (playerSelection, computerSelection);
  }
}

function winnerText() {
  if (roundWinner === `tie`) {
    return "It's a tie!";
  } else if (roundWinner === `player`) {
    return "You've Won!";
  } else if (roundWinner === `computer`) {
    return "You've lost!";
  }
}

function showScore (playerSelection, computerSelection) 
{
  scoreArea.textContent = ''
    const showChosenWeapons = document.createElement('div'); 
    const showCurrentScore = document.createElement('div'); 
    showChosenWeapons.classList.toggle('chosenWeapon');
    showCurrentScore.classList.toggle('currentScore')
    showChosenWeapons.textContent = `${playerSelection} vs ${computerSelection} \r\n ${winnerText()}`;
    showCurrentScore.textContent = `Score is You: ${playerScore}, Computer: ${computerScore}`;
    scoreArea.appendChild(showChosenWeapons);
    scoreArea.appendChild(showCurrentScore);
}

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