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

function playRound(e) {
    let result; 
    let computerSelection;
    let playerSelection;

    numRounds++;

    computerSelection = computerPlay();
    playerSelection = this.textContent;

    if (playerSelection == computerSelection) {
        result =  "Tie";
    } else if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
              (playerSelection == "Scissors" && computerSelection == "Paper") ||
              (playerSelection == "Paper" && computerSelection == "Rock")) {
        result =  "Win";
    } else {
        result =  "Lose";
    }

    game(result);
}

function game(roundResult) {
    const resultsDiv = document.querySelector('.results');

    if (numRounds == 0) {
        resultsDiv.textContent = '';
    }

    if (roundResult == "Tie") {
        tieCount++;
        resultsDiv.textContent = `Ties = ${tieCount} Wins = ${winCount} Losses = ${loseCount}`;
    } else if (roundResult == "Win") {
        winCount++;
        resultsDiv.textContent = `Ties = ${tieCount} Wins = ${winCount} Losses = ${loseCount}`;
    } else {
        loseCount++;
        resultsDiv.textContent = `Ties = ${tieCount} Wins = ${winCount} Losses = ${loseCount}`;
    }

    if (numRounds == 5) {
        numRounds = 0;

        if (winCount > loseCount) {
            resultsDiv.textContent += ' YOU WIN THE GAME!';
        } else if (loseCount > winCount) {
            resultsDiv.textContent += ' YOU LOSE THE GAME!';
        } else {
            resultsDiv.textContent += ' THE GAME WAS A TIE!';
        }

        winCount = 0;
        loseCount = 0
        tieCount = 0;
    }
}

let tieCount = 0;
let winCount = 0; 
let loseCount = 0;
let numRounds = 0;

const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');

rockButton.addEventListener('click', playRound);
paperButton.addEventListener('click', playRound);
scissorsButton.addEventListener('click', playRound);