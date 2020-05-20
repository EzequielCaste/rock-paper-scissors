// This changes everything
"use strict";
// retrieve the element
var btn = document.querySelectorAll(".btn");
var logo = document.getElementsByClassName("hands")
//add event listener to all buttons
btn.forEach(function(x){
	x.addEventListener("click", function(e){
		var msg = document.querySelector(".message")
		
		var i = 3;
		var interval = setInterval(function(){		
			msg.innerText = i;
			i--;
       e.preventDefault;  
		  // -> removing the class
		  logo[0].classList.remove("run-animation");
		  logo[1].classList.remove("run-animation");  
		  void x.offsetWidth;  
		  // -> and re-adding the class		
        logo[0].classList.add("run-animation");
		    logo[1].classList.add("run-animation");
			if(i===0){
        msg.innerText = "go!"
				clearInterval(interval) 
        game(e)
			}
		},900)	
		 
  

		}, false);
})

function game(event){
  console.log(event.target.id)
  var player = document.getElementById("right")

  player.setAttribute("src", event.target.id+".png")
}