var weapons = ["rock","paper","scissors"];
var message = document.querySelector(".message");
var hands = document.querySelectorAll(".hands");
var btn = document.querySelectorAll(".btn");

// player clicks on RPS button
//add event listener to buttons RPS
btn.forEach(function(x){
	x.addEventListener("click", start)
})

function start(event){
	//console.log(event.target.id)
	// restart hands images
	hands[0].setAttribute("src","left_fist.png")
	hands[1].setAttribute("src","right_fist.png")
	// buttons trigger animation and countdown
	countdown(event.target.id);
	shake()
}

function countdown(player){	
	hands[0].classList.add("endPos")
	hands[1].classList.add("endPos")
	var i = 3;	
	message.innerText = i;
	var timer = setInterval(function(){		
		i--;
		message.innerText = i;		
		if(i===0){
			clearInterval(timer)
			message.innerText = "GO!"	
			showResult(player)		
		}		
	},1000);
}

function shake(){
	var hands = document.querySelectorAll(".hands");
	var i = 5;
	var timerAnim = setInterval(function(){		
		i--;
		hands[0].classList.toggle("endPos")		
		hands[1].classList.toggle("endPos")		
		if(i===0){
			clearInterval(timerAnim)			
		}		
	},500);
}

function showResult(weapon){
	//choose a random weapon for CPU
	var cpu = weapons[Math.floor(Math.random()*3)]
	//conditions for WIN
	// R > S
	// S > P
	// P > R
	if(weapon==="rock"&&cpu==="scissors"||weapon==="scissors"&&cpu==="paper"||weapon==="paper"&&cpu==="rock"){
		message.innerText = "You WIN!"
	}
	else if(weapon===cpu) {
		message.innerText = "Tie"
	} else {
		message.innerText = "You Lose"
	}
	changeHands(weapon,cpu)
}

function changeHands(player,cpu){
	hands[1].setAttribute("src",player+".png")
	hands[0].setAttribute("src",cpu+".png")
}
// when animation and countdown is completed
// change images of hands to the chosen RPS icon
// display message win lose or tie