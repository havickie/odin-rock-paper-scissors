'use strict';
let playersChoice;

let playerScore = 0;
let computerScore = 0;


const getComputerChoice = () => {
  //functions randomly returns either rock or paper or scissors
  return Math.random() > 0.7
    ? 'rock'
    : Math.random() > 0.4
    ? 'scissors'
    : 'paper';
};

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playersChoice;
  computerSelection = getComputerChoice();
  if (playerSelection === computerSelection) {
    
    return "It's a Tie, Keep Playing";

  }
  //instances of player losing
  else if (
    (playerSelection === 'scissors' && computerSelection === 'rock') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'rock' && computerSelection === 'paper')
  ) {computerScore++
     console.log(
       `You Lose---- Your Score ${playerScore}:${computerScore} Computer Score`
     );
    return 'You Lose!';
  } else if (
    (computerSelection === 'scissors' && playerSelection === 'rock') ||
    (computerSelection === 'paper' && playerSelection === 'scissors') ||
    (computerSelection === 'rock' && playerSelection === 'paper')

  ) { playerScore++
     console.log(
      `You Win---- Your Score ${playerScore}:${computerScore} Computer Score`
    );
    return 'You Win!';
  
  } else {
    return 'Please select a Correct Name';
  }
};

const game = () => {
  for (let game = 0; game < 5; game++) {
    playersChoice = prompt('Rock Paper Scissors').toLowerCase();
    console.log(playRound());
  }
};
game();
const displayScoreMessage = () => {
  if (playerScore > computerScore) {
    if (computerScore<playerScore) {
      console.log(
        `You Win This Round---- Your Score ${playerScore}:${computerScore} Computer Score`
      );
    }
  }
  if (playerScore < computerScore) {
    console.log(
      `You Lose This Round---- Your Score ${playerScore}:${computerScore} Computer Score`
    );
  }
  if ((playerScore === computerScore)) {
    console.log(
      `You Tie This Round---- Your Score ${playerScore}:${computerScore} Computer Score`
    );
  }
};
displayScoreMessage();
