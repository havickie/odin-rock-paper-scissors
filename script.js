'use strict';

const getComputerChoice = () => {
  //functions randomly returns either rock or paper or scissors
  return Math.random() > 0.7
    ? 'rock'
    : Math.random() > 0.4
    ? 'scissors'
    : 'paper';
};

const playRound = (playerSelection, computerSelection) => {
  let playersChoice = prompt('Rock Paper Scissors').toLowerCase();
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
  ) {
    return 'You Lose!';
  } else if (
    (computerSelection === 'scissors' && playerSelection === 'rock') ||
    (computerSelection === 'paper' && playerSelection === 'scissors') ||
    (computerSelection === 'rock' && playerSelection === 'paper')
  ) {
    return 'You Win!';
  } else {
    return 'Please select a Correct Name';
  }
};


const game = () => {
 let playerScore = 0;
  let computerScore = 0; 
for (let game=0; game<5;game++){
 console.log(playRound());
}
  // } else if (playRound() === 'You Lose!') {
  //   return (computerScore = computerScore + 1);
  // }
  // console.log(playerScore);
  // console.log(computerScore);
};
game();
