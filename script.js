let playerScore = 0;
let comScore = 0;
function computerPlay() {
    var attack = Math.ceil(Math.random() * 3);


    if (attack == 1) {
        return "ROCK";
    }
    if (attack == 2) {
        return "PAPER";
    }
    if (attack == 3) {
        return "SCISSORS";
    }
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() != "rock" && playerSelection.toLowerCase() != "paper" && playerSelection.toLowerCase() != "scissors"){
        console.log("That's a forfeit! Goes to the Computer!")
        comScore++;
    }
    
    else if (playerSelection.toLowerCase() == "rock") {
        console.log("You played " + playerSelection);
        if (computerSelection == "ROCK") {
            
            console.log( "Computer plays... ROCK! It's a DRAW");
        }
        else if (computerSelection == "PAPER") {
            comScore++;
            console.log( "Computer plays... PAPER! You LOST!" );
        }
        else {
            playerScore++;

            console.log( "Computer plays... SCISSORS! You WON!");
        }
    }
    else if (playerSelection.toLowerCase() == "paper") {
        
        if (computerSelection == "PAPER") {

            console.log( "Computer plays... PAPER! It's a DRAW");
        }
        else if (computerSelection == "SCISSORS") {
            comScore++;
            console.log("You played " + playerSelection);
            console.log( "Computer plays... SCISSORS! You LOST!");
        }
        else {
            playerScore++;
            console.log( "Computer plays... ROCK! You WON!");
        }
    }
    else{
        console.log("You played " + playerSelection);
        if (computerSelection == "SCISSORS") {
            
            console.log( "Computer plays... SCISSORS! It's a DRAW");
        }
        else if (computerSelection == "ROCK") {
            comScore++;
            
            console.log( "Computer plays... ROCK! You LOST!");
        }
        else {
            playerScore++;
            
            console.log( "Computer plays... PAPER! You WON!");
        }
    };
};

function game() {
    for (let i = 0; i < 5; i++) {
        var playerSelection = prompt("Do it");
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        console.log("You: " + playerScore + " || " + "COM: " + comScore);
    };
    if (playerScore > comScore) {
        console.log("You beat the computer. It's sad now...")
    }
    else if (playerScore < comScore){
        console.log("You lost to the computer. Don't cry.")
    }
    else{
        console.log("A draw??? Wow...")
    }
};

game();

