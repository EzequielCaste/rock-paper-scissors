// This changes everything
"use strict";
// retrieve the element
var btn = document.querySelectorAll(".btn");
var logo = document.getElementsByClassName("hands")
//add event listener to all buttons
btn.forEach(function(x){
	x.addEventListener("click", function(e){
		var msg = document.querySelector(".message")
		msg.innerText = "go!"
		var i = 3;
		var interval = setInterval(function(){		
			msg.innerText = i;
			i--;
			if(i===0){
				clearInterval(interval) 
			}
		},1000)	
		  e.preventDefault;  
		  // -> removing the class
		  logo[0].classList.remove("run-animation");
		  logo[1].classList.remove("run-animation");  
		  void x.offsetWidth;  
		  // -> and re-adding the class
		  logo[0].classList.add("run-animation");
		  logo[1].classList.add("run-animation");

		}, false);
})

