// This changes everything
"use strict";

// retrieve the element
var btn = document.getElementById("rock");

//var logo = document.getElementById("left");
var logo = document.getElementsByClassName("hands")

// reset the transition by...
btn.addEventListener("click", function(e){
  e.preventDefault;
  
  // -> removing the class
  logo[0].classList.remove("run-animation");
  logo[1].classList.remove("run-animation");
  
  // -> triggering reflow /* The actual magic */
  // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
  // This was, from the original tutorial, will no work in strict mode. Thanks Felis Phasma! The next uncommented line is the fix.
  // element.offsetWidth = element.offsetWidth;
  
  void btn.offsetWidth;
  
  // -> and re-adding the class
  logo[0].classList.add("run-animation");
  logo[1].classList.add("run-animation");
}, false);