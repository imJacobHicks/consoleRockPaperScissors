// Create the computers move randomly
function computerMove(){
    const choices = [
        "ROCK", 
        "PAPER", 
        "SCISSORS"
    ];
    // Randomize the computer choice
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
};

function game() {
    // Loop through game 5 times
    for (let round = 0; round < 5; round++) {
        function playRound() {
            // get player move
            let playerSelection = prompt("Please enter your move", "Rock, Paper, or Scissors").toUpperCase();
            // call computer move function
            let computerSelection = computerMove();
            // define result
            let result = ""
            // if statement for all possible results
            if (playerSelection == computerSelection) {
                result = "It's a Tie! You both chose: " + playerSelection;
            } else if (playerSelection == "ROCK" && computerSelection == "PAPER") {
                result = "You lose! Paper beats Rock.";
            } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
                result = "You win! Rock beats Scissors.";
            } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
                result = "You lose! Rock beats Scissors.";
            } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
                result = "You win! Scissors beat Paper.";
            } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
                result = "You lose! Scissors beats Paper.";
            } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
                result = "You win! Paper beats Rock.";
            } else {
                // All parses are good and a winner should be declared
            };
            return result;
        };
        // display result of round in console
        console.log(playRound());
    };
};

// display entire game in console
console.log(game());
