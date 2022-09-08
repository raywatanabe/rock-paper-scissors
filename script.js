function getComputerChoice(max) {
    let computerSelection = Math.floor(Math.random()*max);
    if (computerSelection == 0) {
        computerSelection = "rock";
    }
    else if (computerSelection == 1) {
        computerSelection = "paper";
    }
    else {
        computerSelection = "scissors";
    }
    return computerSelection;
}

function getPlayerChoice() {
    playerSelection = prompt("Choose your weapon (Rock, Paper, Scissors)");
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}

function playRound() {
    getPlayerChoice();
    computerSelection = getComputerChoice(3);
    if (playerSelection == computerSelection) {
        result = "Tie game!";
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        result = "Paper beats rock. You lose.";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        result = "Rock beats scissors. You win!";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        result = "Scissors beats paper. You lose.";
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        result = "Paper beats rock. You win!";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        result = "Rock beats scissors. You lose.";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        result = "Scissors beats paper. You win!";
    }
    else {
        result = "Please choose a valid weapon.";
    }
    console.log(`${result} Your Score: ${playerScore}. Computer Score ${computerScore}.`);
}

function game() {
    playerScore = 0;
    computerScore = 0;

    do
    playRound();
    while (playerScore < 3 && computerScore < 3);

    if (playerScore > computerScore) {
        console.log("You Win!");
    }
    else {
        console.log("You Lose.");
    }
}