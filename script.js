/* ------------------------- Console game -----------------------------------------
console.clear();
game();

function game(){
    let round = 1;
    let computerScore = 0;
    let playerScore = 0;

    while(computerScore <5 && playerScore < 5){
        switch(playRound(playerPlay(), computerPlay(), round)){
            case "tie" :
                console.log("its a tie")
                showScore(computerScore,playerScore)
                break;
            
            case "computer" :
                computerScore += 1;
                console.log("Computer won the round")
                showScore(computerScore,playerScore)
                break;
        
            case "player" :
                playerScore += 1;
                console.log("Player won the round")
                showScore(computerScore,playerScore)
                break;
        }
        round++;
    }
    if (computerScore == 5 ) console.info("Computer win !");
    else if (playerScore == 5 ) console.info("Player win !");

    restart();
}

function restart(){
    if(window.confirm("Restart a game ?")) game()
}

function playRound(playerSelection, computerSelection, nbRound){
    let result = null;

    console.log(`round ${nbRound} !` );
    console.log(`Computer choose ${firstLetterUpperCase(computerSelection)} !`);
    console.log(`Player choose ${firstLetterUpperCase(playerSelection)} !`);

    switch(playerSelection){
        case "rock":
            switch(computerSelection){
                case "rock":
                    result = "tie";
                    break;

                case "paper":
                    result = "computer";
                    break;
            
                case "scissors":
                    result = "player";
                    break;
            }
            break;
        
        case "paper":
            switch(computerSelection){
                case "rock":
                    result = "player";
                    break;

                case "paper":
                    result = "tie"
                    break;
            
                case "scissors":
                    result = "computer";
                    break;
            }
            break;

        case "scissors":
            switch(computerSelection){
                case "rock":
                    result = "computer";
                    break;

                case "paper":
                    result = "player";
                    break;
            
                case "scissors":
                    result = "tie"
                    break;
            }
            break;
    }
    return result;
}

function computerPlay(){    
    switch(Math.floor(Math.random() * 3) +1)
    {
        case 1:
            return "rock";
            break;
        
        case 2:
            return "paper";
            break;
        
        case 3:
            return "scissors";
            break;

        default:
            console.log("Computer dont know what to play");
            return computerPlay();
    }
}

function playerPlay(){
    let playerSelection = prompt("Select your WEAPON  between Rock/Paper/Scissors ! : ");
    
    while ( playerSelection != "rock" && playerSelection != "paper"  && playerSelection != "scissors"){
        playerSelection = prompt("Please select regular weapon (Rock/Paper/Scissors) : ")
        playerSelection = playerSelection.toLowerCase();
        console.log(playerSelection);
    }

    return playerSelection;
}

function firstLetterUpperCase(string){

    return String(string).charAt(0).toUpperCase()+String(string).slice(1);
}

function showScore(computerScore, playerScore){
    console.log(`Player : ${playerScore} -- Computer : ${computerScore}`,)
}

-----------------------------------------------------------------------------------------------*/

/*----------------------------- Web Application -----------------------------------------------*/
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const computerCard = document.getElementById("computerCard");
const playButton = document.getElementById("playRound");
const resultText = document.getElementById("result");
const scoreText = document.getElementById("scoreText");
let computerScore = 0;
let playerScore = 0;

let playerSelection = null;
let computerSelection = null;

function isOver(){
    if (computerScore >= 5 || playerScore >= 5 )
    {
        
    }
    return;
}

function computerPlay(){    
    switch(Math.floor(Math.random() * 3) +1)
    {
        case 1:
            return "rock";
            break;
        
        case 2:
            return "paper";
            break;
        
        case 3:
            computerCard.style.display = "";
            computerCard.style.backgroundImage = "url('icon/scissors.svg')";
            return "scissors";
            break;

        default:
            console.log("Computer dont know what to play");
            return computerPlay();
    }
}

function restart(){
    if(window.confirm("Restart a game ?")) game()
}

function playRound(event){
    let result = null;

    computerSelection = computerPlay();

    switch(playerSelection){
        case "rock":
            switch(computerSelection){
                case "rock":
                    computerCard.style.display = "block";
                    computerCard.style.backgroundImage = "url('icon/rock-2.svg')";
                    result = "tie";
                    break;

                case "paper":
                    computerCard.style.display = "block";
                    computerCard.style.backgroundImage = "url('icon/document.svg')";
                    result = "computer";
                    break;
            
                case "scissors":
                    computerCard.style.display = "block";
                    computerCard.style.backgroundImage = "url('icon/scissors.svg')";
                    result = "player";
                    break;
            }
            break;
        
        case "paper":
            switch(computerSelection){
                case "rock":
                    computerCard.style.display = "block";
                    computerCard.style.backgroundImage = "url('icon/rock-2.svg')";
                    result = "player";
                    break;

                case "paper":
                    computerCard.style.display = "block";
                    computerCard.style.backgroundImage = "url('icon/document.svg')";
                    result = "tie"
                    break;
            
                case "scissors":
                    computerCard.style.display = "block";
                    computerCard.style.backgroundImage = "url('icon/scissors.svg')";
                    result = "computer";
                    break;
            }
            break;

        case "scissors":
            switch(computerSelection){
                case "rock":
                    computerCard.style.display = "block";
                    computerCard.style.backgroundImage = "url('icon/rock-2.svg')";
                    result = "computer";
                    break;

                case "paper":
                    computerCard.style.display = "block";
                    computerCard.style.backgroundImage = "url('icon/document.svg')";
                    result = "player";
                    break;
            
                case "scissors":
                    computerCard.style.display = "block";
                    computerCard.style.backgroundImage = "url('icon/scissors.svg')";
                    result = "tie"
                    break;
            }
            break;
    }
    
    switch(result){
        case "tie":
            resultText.style.color ="white";
            resultText.innerText = "it's a Tie !"
            break;
        
        case "computer":
            resultText.style.color ="red";
            resultText.innerText = "Computer Win !"
            computerScore += 1;
            break;

        case "player":
            resultText.style.color ="blue";
            resultText.innerText = "Player Win !"
            playerScore += 1;
            break;
    }

    scoreText.innerText = `${playerScore} - ${computerScore}`;

}

rock.addEventListener('click',function(event){
    rock.style.borderColor = "blue";
    paper.style.borderColor= "black";
    scissors.style.borderColor= "black";
    playerSelection = "rock";
});

paper.addEventListener('click',function(event){
    paper.style.borderColor = "blue";
    rock.style.borderColor= "black";
    scissors.style.borderColor= "black";
    playerSelection = "paper";
});

scissors.addEventListener('click',function(event){
    scissors.style.borderColor = "blue";
    paper.style.borderColor= "black";
    rock.style.borderColor= "black";
    playerSelection = "scissors";
});

playButton.addEventListener('click',playRound);


