const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")

const playerScore = document.querySelector(".score.player")
const computerScore = document.querySelector(".score.computer")

const showInfo = document.querySelector(".alert")

let computerScoreNum = 0
let playerScoreNum = 0
let currentWinner = () =>{
    if (computerScoreNum > playerScoreNum){
        return "Computer Win!"
    }else{
        return "Hooray you win!"
    }
}

function getComputerChoice(){
    let randomChoice = Math.floor(Math.random()*3) + 1
    
    switch (randomChoice){
        case 1:
            return "Rock"
        case 2:
            return "Paper"
        case 3:
            return "Scissors"
    }
}

function gameLogic(user,computer){
    // console.log(user)
    // console.log(computer)
    const prop = {
        "Rock" : "Scissors",
        "Paper" : "Rock",
        "Scissors" : "Paper"
    }
    if (user === computer){
        showInfo.textContent = "Its a draw!"
    }else if (prop[user] === computer){
        showInfo.textContent = `You Win \n Player = ${user}\nComputer = ${computer}`
        playerScoreNum += 1
        playerScore.textContent = `You : ${playerScoreNum}`
    }else{
        showInfo.textContent = `You Lose \n Player = ${user}\nComputer = ${computer}`
        computerScoreNum += 1
        computerScore.textContent = `Comp: ${computerScoreNum}`
    }
}

function playRound(playerChoice){ //This function will remove eventListener so the game stopped
    const computer = getComputerChoice()
    gameLogic(playerChoice, computer);
    if (computerScoreNum >=5 || playerScoreNum >= 5){
        playerEvent.removeEventListener("click", playerEventHandler);
    }
}


function playerEventHandler(ev){
    let target = ev.target
    switch (target.id){
        case "rock":
            console.log("Rock clicked")
            playRound("Rock");
            break;
        case "scissors":
            playRound("Scissors");
            break;
        case "paper":
            playRound("Paper");
            break;
    }
}

const playerEvent = document.querySelector(".player-ui");

playerEvent.addEventListener("click", playerEventHandler);