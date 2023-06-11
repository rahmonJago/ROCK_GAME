let rock = document.getElementById('rock');
let paper = document.getElementById('paper')
let scissors = document.getElementById('scissors')
let computerChoice = document.getElementById('computer-choice')
let userChoice = document.getElementById('user-choice')
let score = document.getElementById('score')
let user = document.getElementById('user-score')
let computer = document.getElementById('computer-score')
let countClicks = document.getElementById('counter')
let counter = 10
let userScore = 0
let  computerScore = 0;

// Modal Box Score Displayer
let playerScore = document.getElementById('player-score')
let comScore = document.getElementById('com-score')
let winner = document.getElementById('winner')
// End of Modal box variable

let options = ['Rock', 'Paper', 'Scissors'];
let userCard = ""
let computerCard = " "


rock.addEventListener('click', ()=>{
    userCard = 'Rock';
    userChoice.textContent ="Rock"
    computerCard = options[Math.floor(Math.random() * options.length)]
    computerChoice.textContent = computerCard;
    winningOptions();
    counter--
    countClicks.textContent = counter
    endGame(counter)
    
    
})
paper.addEventListener('click', ()=>{
    userCard = 'Paper';
    userChoice.textContent ="Paper"
     computerCard = options[Math.floor(Math.random() * options.length)]
    computerChoice.textContent = computerCard;
    winningOptions();
    counter--
    countClicks.textContent = counter
    endGame(counter)
})
scissors.addEventListener('click', ()=>{
    userCard = 'Scissors';
    userChoice.textContent ="Scissors"
    computerCard = options[Math.floor(Math.random() * options.length)]
    computerChoice.textContent = computerCard;
    winningOptions();
    counter--
    countClicks.textContent = counter
    endGame(counter)
})

const winningOptions = ()=>{
    if(userChoice.textContent === computerChoice.textContent ){
        score.textContent = 'Draw'
    }
    else if(userChoice.textContent === 'Rock' && computerChoice.textContent === 'Scissors'){
        score.textContent = 'You Won'
        userScore++
        
    }
    else if(userChoice.textContent === 'Scissors' && computerChoice.textContent === 'Paper'){
        score.textContent = 'You Won'
        userScore++
    }
    else if(userChoice.textContent === 'Paper' && computerChoice.textContent === 'Rock'){
        score.textContent = 'You Won'
        userScore++
    }

    else if(computerChoice.textContent === 'Rock' && userChoice.textContent === 'Scissors'){
        score.textContent = 'Computer Won'
        computerScore++
    }
    else if(computerChoice.textContent === 'Scissors' && userChoice.textContent === 'Paper'){
        score.textContent = 'Computer Won'
        computerScore++
    }
    else if(computerChoice.textContent === 'Paper' && userChoice.textContent === 'Rock'){
        score.textContent = 'Computer Won'
        computerScore++
    }
    user.innerHTML = Number(userScore);
    computer.innerHTML = computerScore;
    playerScore.innerHTML= Number(userScore)
    comScore.innerHTML = computerScore

    // CHECK WINNER
    if((Number(playerScore.innerHTML) > Number(comScore.innerHTML))){
        winner.innerHTML = "Cogratulations Player User You won the Competition"
    }
    else if((Number(comScore.innerHTML) > Number(playerScore.innerHTML))){
        winner.innerHTML = "Sorry, Player User ou lost the contest to Computer"
    }
    else{
        winner.innerHTML = "The contest ended in a Draw, Try Again!"
    }
}
 
let refreshBtn = document.getElementById('reset-btn')
refreshBtn.addEventListener('click', ()=>{
    location.reload();
})

// function to stop Game when click is 10
// Display modalBox on Game Completion
let modalBox = document.getElementById('modalBox');
let closeIcon = document.getElementById('closeIcon')

const endGame = (counter)=>{
    if(counter == 0){
        alert("The Game has Ended. Check Score Board ")
        modalBox.style.display = "flex"
        paper.disabled = true;
        rock.disabled= true;
        scissors.disabled = true;
        refreshBtn.disabled = true;
    }
}
// MODAL BOX
closeIcon.addEventListener('click', ()=>{
    modalBox.style.display= "none"
    
    location.reload();
})


