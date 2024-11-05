let computerChoice = getRandomInt(3);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice(computerChoice) {
    let choice;

    if (computerChoice == 0) {
        choice = "Rock";
    }

    else if (computerChoice == 1) {
        choice = "Paper";
    }

    else {
        choice = "Scissors";
    }

    console.log(`I chose ${choice}!`);
}

getComputerChoice(computerChoice);


