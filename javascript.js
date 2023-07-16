let playerSelection;
let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('#rock-button');
const paper = document.querySelector('#paper-button');
const scissors = document.querySelector('#scissors-button');

const message = document.querySelector('#message');
const score = document.querySelector('#score')
const winlose = document.createElement('div');
const pScore = document.createElement('div');
const cScore = document.createElement('div');
const winner = document.createElement('div');

winlose.setAttribute('style', 'font-size: 50px; text-align: center; padding-top: 60px;');
winner.setAttribute('style', 'font-size: 50px; text-align: center; padding-top: 60px;');

winlose.classList.add('winlose');
pScore.classList.add('pScore');
cScore.classList.add('cScore');
winner.classList.add('winner');



function getComputerChoice(){
    let num = Math.floor(Math.random() * 3) + 1;
    switch(num){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    let p = playerSelection.toLowerCase();
    let c = computerSelection.toLowerCase();
    if(p == c){
        return "tie. you both played " + p;
    }
    else if(p == "rock" && c == "scissors" ||
            p == "scissors" && c == "paper" ||
            p == "paper" && c == "rock"
        ){
        playerScore++;
        return "you win!! " + p + " beats " + c;
    }
    else if(p == "rock" && c == "paper" ||
            p == "scissors" && c == "rock" ||
            p == "paper" && c == "scissors"
        ){
        computerScore++;
        return "you lose :(, " + c + " beats " + p;
    }
}


function game(){
    computerSelection = getComputerChoice();
    winlose.textContent = playRound(playerSelection, computerSelection);

    message.appendChild(winlose);

    pScore.textContent = "Your score: " + playerScore;
    cScore.textContent = "Computer score: " + computerScore;



    score.appendChild(pScore);
    score.appendChild(cScore);

    if(computerScore >= 5){
        winner.textContent = "The computer wins and the AI takes over the world";
        message.appendChild(winner);
        playerScore = 0;
        computerScore = 0;
    }
    else if(playerScore >= 5){
        winner.textContent = "Humanity wins! You are compensated with an Amazon gift card.";
        message.appendChild(winner);
        playerScore = 0;
        computerScore = 0;
    }
}


function playRock(){
    playerSelection = "rock";
    game();
}

function playPaper(){
    playerSelection = "paper";
    game();
}

function playScissors(){
    playerSelection = "scissors";
    game();
}

rock.addEventListener('click', playRock);
paper.addEventListener('click', playPaper);
scissors.addEventListener('click', playScissors);