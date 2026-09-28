function getComputerChoice() {

    let computerChoice = Math.floor(Math.random() * 3)

    if (computerChoice === 0) {
        return "rock"
    }
    else if (computerChoice === 1) {
        return "scissors"
    }
    else {
        return "paper"
    }

}

function getHumanChoice() {

    let humanChoice = prompt("Please enter your choice between rock, paper, and scissors:");
    return humanChoice.toLowerCase();

}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    let totalRounds = 0;
    while (totalRounds != 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        totalRounds += 1;
    }
    if (computerScore > humanScore) {
        console.log("You lost the game! Better luck next time!");
    }
    else if (humanScore > computerScore) {
        console.log("You won the game! Congratulations!");
    }
    else {
        console.log("The game ends in a tie!");
    }

    function playRound(humanChoice, computerChoice) {
        let result = null;
        if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")) {
            result = 1;
        }
        else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "scissors" && computerChoice === "rock") || (humanChoice === "paper" && computerChoice === "scissors")) {
            result = 0;
        }
        else{
            result = -1;
        }

        if (result == 1) {
            console.log(`You Win! ${humanChoice} beats ${computerChoice}!`);
            humanScore += 1;
        }
        else if (result == 0) {
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}!`);
            computerScore += 1;
        }
        else if (result == -1) {
            console.log("This round is a Tie!");
        }
    }

}

