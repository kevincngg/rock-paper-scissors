
function getComputerChoice(){

    let computerChoice = Math.floor(Math.random() * 3)

    if (computerChoice === 0){
        return "rock"
    }
    else if (computerChoice === 1){
        return "scissors"
    }
    else{
        return "paper"
    }
        
}

function getHumanChoice(){

let humanChoice = prompt("Please enter your choice between rock, paper, and scissors:");    return humanChoice;
return humanChoice;

}
