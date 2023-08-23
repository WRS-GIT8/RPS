function getComputerChoice(){
    let gameChoice
    let compChoice = Math.floor(Math.random() * 3)
    if (compChoice == 0) {
        gameChoice = "Rock"
    } else if (compChoice == 1) {
        gameChoice = "Paper"
    } else {
        gameChoice = "Scissor"
    }
    console.log(gameChoice)
}

getComputerChoice()

