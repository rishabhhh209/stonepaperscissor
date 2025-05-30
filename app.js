

let userScore = 0;
let compScore = 0;
let userScorePara = document.querySelector('#user_score');
let compScorePara = document.querySelector('#comp_score');


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector('#msg')


const genCompChoice = ()=>{
    const options = ["rock" ,"paper" , "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx]
}

const drawGame = ()=>{
    msg.innerText = "Game was Draw play again";
    msg.style.background = "#081b31";
    msg.style.color = "#fff";
    
}


const showWinner = (userWin, userChoice , compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `you win! Your ${userChoice} beats ${compChoice}`;
        msg.style.background = "Green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you loose! ${compChoice} beats your ${userChoice}`;
        msg.style.background = "red";
    }
}

const playGame = (userChoice)=>{
  console.log("user choice = " , userChoice);
  const compChoice = genCompChoice();
  console.log("comp choice = " , compChoice);
  
  if(userChoice===compChoice){
     drawGame();

    }
    else{
        let userWin = true;
        if(userChoice=== "rock"){
            userWin= compChoice === "paper" ? false : true
        }
        else if(userChoice=== "paper"){
             userWin = compChoice === "scissor" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice);
    }
}





choices.forEach((choice) => {
    
    choice.addEventListener("click" , ()=>{
        const userChoice = choice.getAttribute("id")
       playGame(userChoice);
    })
});


