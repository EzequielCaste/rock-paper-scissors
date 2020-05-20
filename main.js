const squares = document.querySelectorAll(".square");
const rps = ["rock","paper","scissors"];
const message = document.querySelector("#message");
const playerScore = document.querySelector("#player-score");
const cpuScore = document.querySelector("#cpu-score")
const roundWinner = document.querySelector("#round-winner")

squares.forEach( square => { 
  square.addEventListener("click", handleClick);
})

function handleClick(event) {
  
  if (playerScore.innerText == 4 || cpuScore.innerText == 4) {
    roundWinner.setAttribute("style", "display: block");
    playerScore.innerText = 0;
    cpuScore.innerText = 0;
  }

  if (playerScore.innerText == 0 && cpuScore.innerText == 0) {    
    roundWinner.setAttribute("style", "display: none")
  }

  let cpu = rps[Math.floor(Math.random()*3)]
  let player = event.target.getAttribute("id")
  
  if(player==="rock"&&cpu==="scissors"||player==="scissors"&&cpu==="paper"||player==="paper"&&cpu==="rock"){
    message.innerText = `You win the round! ${player} beats ${cpu}!`
    playerScore.innerText = +playerScore.innerText + 1;

    if (playerScore.innerText == 4) {
      roundWinner.setAttribute("style", "display: block");
      roundWinner.innerText = "Congratulations! You won the match!"      
    }
	}
	else if(player===cpu) {
		message.innerText = `Draw! Computer also chose ${cpu}`
	} else {
    message.innerText = `You lose the round! ${cpu} beats ${player}!`
    cpuScore.innerText = +cpuScore.innerText + 1;

    if (cpuScore.innerText == 4) {
      roundWinner.setAttribute("style", "display: block");
      roundWinner.innerText = "You lost the match!";      
    }
  }
  
  message.setAttribute("style","display:block")

}

