// OPEN/CLOSE DROPDOWN MENU FROM HAMBURGER BUTTON       OPEN/CLOSE DROPDOWN MENU FROM HAMBURGER BUTTON
// GET ELEMENTS
var btn = document.getElementById("dropdown_btn"); // button pressed to open menu
var span = document.getElementsByClassName("hamburger"); // the 3 span elements representing btn
var dropdown = document.getElementById("dropdown"); // menu with links
var open = false; // is menu open?

// WHEN HAMBURGER BUTTON CLICKED OPEN/CLOSE DROPDOWN MENU
// VIA SLIDING MENU ON OR OFF VIEWPORT
btn.onclick = function() {
  if (open == false) {
    // OPEN MENU
    dropdown.style.left = "50vw";
    open = true;
  } else {
    //CLOSE MENU
    dropdown.style.left = "100vw";
    open = false;
  }
  // TOGGLE CLOSE CLASS FOR EACH HAMBURGER SPAN ELT
  for (var i = 0; i < span.length; i++) {
    span[i].classList.toggle("close");
  }
};

// HOME ISSUE TITLE EXPANDS UPON HOVERING OVER
var headerTxt = document.getElementsByClassName("issue");
headerTxt[2].addEventListener("mouseover", expand);
headerTxt[2].addEventListener("mouseout", expand);

function expand() {
  headerTxt[1].classList.toggle("expandB");
  headerTxt[2].classList.toggle("expandC");
}

var cards = document.getElementsByClassName("card");
for (var i = 0; i < cards.length; i++) {
  cards[i].style.gridAre = i + 2 + " / inherit";
}
