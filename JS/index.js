function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    }
    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

function playGame(playerChoice) {
    playerChoice = playerChoice.toLowerCase();
    const computerChoice = getComputerChoice();
    const resultText = `You chose: ${playerChoice} <br> Computer chose: ${computerChoice} <br> ${determineWinner(playerChoice, computerChoice)}`;
    document.getElementById("result").innerHTML = resultText;
}