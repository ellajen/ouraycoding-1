var headerElement = document.getElementById("header");

function partyTime() {
  headerElement.innerHTML += " Party!";
}

headerElement.addEventListener("click", partyTime);

var invisibleElement = document.getElementById("invisible");
function hideIt() {
  invisibleElement.style.visibility = "hidden";
}

invisibleElement.addEventListener("click", hideIt);


/* calculator stuff */

var screen = document.getElementById("screen");
var firstNumber;
var operation;

function add(a, b) {
  return a + b;
}

function subtract(a, b){
  return a - b;
}

function addNumberToScreen(number) {
  screen.innerHTML += number;
}

document.getElementById("b1").addEventListener("click", function() {
  addNumberToScreen(1);
});

document.getElementById("b2").addEventListener("click", function() {
  addNumberToScreen(2);
});

document.getElementById("b3").addEventListener("click", function() {
  addNumberToScreen(3);
});
document.getElementById("b4").addEventListener("click", function() {
  addNumberToScreen(4);
});
document.getElementById("b5").addEventListener("click", function() {
  addNumberToScreen(5);
});
document.getElementById("b6").addEventListener("click", function() {
  addNumberToScreen(6);
});
document.getElementById("b7").addEventListener("click", function() {
  addNumberToScreen(7);
});
document.getElementById("b8").addEventListener("click", function() {
  addNumberToScreen(8);
});
document.getElementById("b9").addEventListener("click", function() {
  addNumberToScreen(9);
});
document.getElementById("b0").addEventListener("click", function() {
  addNumberToScreen(0);
});
document.getElementById("plus").addEventListener("click", function() {
  //save current number
  firstNumber = screen.innerHTML;
  //clear the screen
  screen.innerHTML = "";
});
document.getElementById("minus").addEventListener("click", function() {
  //will do this later
});
document.getElementById("equals").addEventListener("click", function() {
  //get the current number
  var currentNumber = screen.innerHTML;
  //get the first number
  //add the two together
  var result = parseInt(currentNumber) + parseInt(firstNumber);
  //show result on screen
  screen.innerHTML = result;
});
