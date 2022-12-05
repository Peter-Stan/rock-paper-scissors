let playerScore = 0;
    let computerScore = 0;


    const getComputerChoice = () => {
   const arrayChoice = ['rock', 'paper', 'scissors'];
   const randomPick = [Math.floor(Math.random() * arrayChoice.length)];
   const computerChoice = arrayChoice[randomPick];
   return computerChoice;
  
}

function playRound(playerSelection, computerSelection) {
   if (playerSelection === computerSelection) {
      return `It's a tie! you both picked ${playerSelection}`;
      
   } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "You win! Rock beats Scissors"
      
   } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "You win! Paper beats Rock"
      
   } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "You win! Scissors beats Paper"
     
   } else {
    computerScore++
    return `You lose! ${computerSelection} beats ${playerSelection}`;
      
   }
}



const game = () => {
    
        for (let i = 0; i < 5; i++) {
            const playerSelection = prompt("make your choice").toLowerCase();
            const computerSelection = getComputerChoice();
            console.log(playRound(playerSelection, computerSelection));
        }
        if (playerScore > computerScore) {
            return "You beat the Computer!";
        } else if (playerScore < computerScore) {
            return "You Lost!!";
        }else {
            return "It's a tie";
        }
                 
}
console.log(game());