let playerScore = 0;
let computerScore = 0;
const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const outcomeDiv = document.querySelector('.outcome')
const playerScoreSpan = document.querySelector('.player-score')
const computerScoreSpan = document.querySelector('.computer-score')
    const getComputerChoice = () => {
    const arrayChoice = ['rock', 'paper', 'scissors'];
    const randomPick = [Math.floor(Math.random() * arrayChoice.length)];
    const computerChoice = arrayChoice[randomPick];
    return computerChoice;
  
}

function playRound(playerSelection, computerSelection) {
    
   

   if (playerSelection === computerSelection) {
      const p = document.createElement('p')
      p.innerText = `It's a tie! you both picked ${playerSelection}`;
      outcomeDiv.appendChild(p)
   } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    const p = document.createElement('p')
    p.innerText = "You win! Rock beats Scissors"
    outcomeDiv.appendChild(p)
      
   } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    const p = document.createElement('p')
    p.innerText = "You win! Paper beats Rock"
    outcomeDiv.appendChild(p)
      
   } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    const p = document.createElement('p')
    p.innerText = "You win! Scissors beats Paper"
    outcomeDiv.appendChild(p)
     
   } else {
    computerScore++
    const p = document.createElement('p')
    p.innerText = `You lose! ${computerSelection} beats ${playerSelection}`;
    outcomeDiv.appendChild(p)
      
   }
}

const checkForWinner = (playerScore, computerScore) => {
    if (playerScore === 5) {
        const h2 = document.createElement('h2')
        h2.classList.add('player-won')
        h2.innerText = `You won ${playerScore} to ${computerScore} in the best of five!`
        outcomeDiv.append(h2)
    }else if (computerScore === 5) {
        const h2 = document.createElement('h2')
        h2.classList.add('computer.won')
        h2.innerText = `Computer won ${computerScore} to ${playerScore} in the best of five!`
        outcomeDiv.append(h2)
    }
}

const updateScores = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `Player score: ${playerScore} `
    computerScoreSpan.innerText = `Computer score:  ${computerScore}`
}

rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'rock'
    playRound(playerSelection, computerSelection)
    updateScores(playerScore,computerScore)
    checkForWinner(playerScore,computerScore)
})

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'paper'
    playRound(playerSelection, computerSelection)
    updateScores(playerScore,computerScore)
    checkForWinner(playerScore,computerScore)
})

scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'scissors'
    playRound(playerSelection, computerSelection)
    updateScores(playerScore,computerScore)
    checkForWinner(playerScore,computerScore)
})

//const game = () => {
    
        //for (let i = 0; i < 5; i++) {
            //const playerSelection = prompt("make your choice").toLowerCase();
            //const computerSelection = getComputerChoice();
            //console.log(playRound(playerSelection, computerSelection));
        //}
        //if (playerScore > computerScore) {
        //    return "You beat the Computer!";
        //} else if (playerScore < computerScore) {
        //    return "You Lost!!";
        //}else {
        //    return "It's a tie";
        //}
                 
//}
//console.log(game());