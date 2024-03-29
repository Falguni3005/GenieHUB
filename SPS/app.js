///// Game.......

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

 
  // Generate comp choice
const genCompChoice =() =>
{
  // rock ,paper,scissor randomly using array
const options = [ "rock","paper","scissors"];
const randidx = Math.floor(Math.random() *3 )
return options[randidx];
};

 const drawGame = () =>
 {
  msg.innerText = "Game was draw , again play";
  msg.style.backgroundColor = "black";
 };
 
 const showWinner = (userWin,userChoice,compChoice) =>
 {
  if(userWin)
  {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = 'You win!';
    console.log(compChoice);
    msg.style.backgroundColor = "green";
  }
  else
  {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = 'you lost.';
    console.log(compChoice);
    msg.style.backgroundColor = "red";
  }
 };

const playGame = (userChoice) =>
{
  const compChoice = genCompChoice();
 if(userChoice === compChoice)
 {
  drawGame();
 }
  else
  {
    let userWin = true;
    if (userChoice === "paper")
    {
      // scissors,paper
      userWin = compChoice === "scissors"? false:true;
      console.log(userWin)
     }
     else if (userChoice ==="scissors")
     {
       // rock,scissors
       userWin = compChoice === "rock"? false : true;
       console.log(userWin)
     }
      else 
      {
        userWin = compChoice === "paper" ? false : true;  
        console.log(userWin)  
      }
      showWinner(userWin,userChoice,compChoice);
}
}
choices.forEach((choice) =>
{
  choice.addEventListener("click", () =>
  {
    const userChoice= choice.getAttribute("id");
    playGame(userChoice);
  });
});