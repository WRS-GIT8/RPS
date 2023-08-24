
let playerScore = 0
let computerScore = 0
let totalRounds = 0
const roundsToWin = 3


function getComputerChoice(){
    let gameChoice
    let compChoice = Math.floor(Math.random() * 3)
    if (compChoice == 0) {
        gameChoice = "rock"
    } else if (compChoice == 1) {
        gameChoice = "paper"
    } else {
        gameChoice = "scissors"
    }
    return gameChoice
}

function getPlayerChoice(){
    let pChoice = prompt("Please choose rock, paper, or scissors")
    pChoice = pChoice.toLowerCase()
    return pChoice
}

function play(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        console.log("It is a tie!")
        return "It is a tie!"
    }
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
        ) {
        console.log("You win!")
        return "You win!"
        }
    else {
        console.log("You lose...")
        return "The computer wins! ${computerChoice} beats ${playerChoice}"
    }
}

play(getPlayerChoice(), getComputerChoice())
