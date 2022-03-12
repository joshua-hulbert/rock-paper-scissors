function computerPlay() {
    let rand = Math.floor(Math.random() * 3);

    if (rand == 0) {
        return "Rock";
    }
    else if (rand == 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionFormatted = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    if (playerSelectionFormatted == computerSelection) {
        return "Tie";
    } else if ((playerSelectionFormatted == "Rock" && computerSelection == "Scissors") ||
              (playerSelectionFormatted == "Scissors" && computerSelection == "Paper") ||
              (playerSelectionFormatted == "Paper" && computerSelection == "Rock")) {
        return "Win";
    } else {
        return "Lose";
    }
}

function game() {
    let winCount = 0;
    let loseCount = 0;
    let tieCount = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors");
        let result = playRound(playerSelection, computerPlay());
        if (result == "Tie") {
            tieCount++;
            console.log("It's a tie this round!");
        } else if (result == "Win") {
            winCount++;
            console.log("You win this round!");
        } else {
            loseCount++;
            console.log("You lose this round!");
        }
    }

    if (winCount > loseCount) {
        console.log("You won the game!!!");
    } else if (loseCount > winCount) {
        console.log("You lost the game!!!");
    } else {
        console.log("This game was a tie!");
    }
}

game();