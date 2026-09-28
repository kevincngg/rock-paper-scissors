
function getComputerChoice(){

    computerChoice = Math.floor(Math.random() * 3)

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