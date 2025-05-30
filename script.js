let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScorePara = document.querySelector('#user_score')
const compScorePara = document.querySelector('#comp_score')


const drawGame = ()=>{
    msg.innerText = "Game was Draw";
    msg.style.background = "yellow";
    msg.style.color = "black";
}

const showWinner = (userwin , userChoice , compChoice)=>{
    if(userwin){
      userScore++;
      userScorePara.innerText = userScore;
        msg.innerText = `you winn! your ${userChoice} beats ${compChoice} `;
        msg.style.background = "green";
        msg.style.color = "#fff";
    }
    else{
      compScore++;
      compScorePara.innerText = compScore;
      msg.innerText = `you loose! ${compChoice} beats ${userChoice} `;
      msg.style.background = "red";
      msg.style.color = "#fff";
    }
}
const genCompChoice =()=>{
    const options = ["rock" , "paper", "scissor"];
     const randIdx = Math.floor(Math.random()*3)
  return options[randIdx]
}

 const playGame =(userChoice,userwin)=>{
   const compChoice = genCompChoice()
  if(userChoice===compChoice){
    drawGame()
  }
  else{
    let userwin = true;
  if(userChoice==="paper"){
    userwin = compChoice === "rock" ? true : false;
  }
  else if(userChoice==="rock"){
    userwin = compChoice === "paper" ? false : true;
  }
  else{
    userwin = compChoice==="rock"?false :true;
  }
  showWinner(userwin , userChoice , compChoice);
  }
   
 }

choices.forEach((choice)=>{
   choice.addEventListener("click" ,()=>{
      const userChoice = choice.getAttribute('id')
      playGame(userChoice)
   })
})