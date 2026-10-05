// Initialize score and round variables.
let humanScore = 0;
let computerScore = 0;
let totalRounds = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        // Perform actions here
        playRound(humanSelection, ComputerSelection);
    });
});
function getComputerChoice() {
    // Picks a random number between 0-2 for the computer's choice
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
    // Prompt's user to choose between rock, paper, or scissors.
    let humanChoice = document.getElementById()
    return humanChoice.toLowerCase();
    

}

function playGame() {


    // // While totalRounds is < 5 play the game.
    // while (totalRounds < 5) {
    //     const humanSelection = getHumanChoice();
    //     const computerSelection = getComputerChoice();
    //     playRound(humanSelection, computerSelection);
    //     totalRounds += 1;
    // }

    // Conditions depending on the amount of rounds won between the user and the computer.
    if (computerScore > humanScore) {
        console.log("You lost the game! Better luck next time!");
    }
    else if (humanScore > computerScore) {
        console.log("You won the game! Congratulations!");
    }
    else {
        console.log("The game ends in a tie!");
    }

    // Function that prints who won the round and updates the score of the winner or loser.
    function playRound(humanChoice, computerChoice) {
        if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")) {
            console.log(`You Win! ${humanChoice} beats ${computerChoice}!`);
            humanScore += 1;
        }
        else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "scissors" && computerChoice === "rock") || (humanChoice === "paper" && computerChoice === "scissors")) {
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}!`);
            computerScore += 1;
        }
        else {
            console.log("This round is a Tie!");
        }

    }

}

