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
function divide(a, b){
  return a / b;
}
function times(a, b){
  return a * b;
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
  //save operation
  operation = add;
  firstNumber = screen.innerHTML;
  //clear the screen
  screen.innerHTML = "";
});
document.getElementById("minus").addEventListener("click", function() {
  //save operation
  operation = subtract;
  firstNumber = screen.innerHTML;
  screen.innerHTML = "";
});
document.getElementById("divide").addEventListener("click", function() {
  //save operation
  operation = divide;
  firstNumber = screen.innerHTML;
  screen.innerHTML = "";
});
document.getElementById("times").addEventListener("click", function() {
  //save operation
  operation = times;
  firstNumber = screen.innerHTML;
  screen.innerHTML = "";
});
document.getElementById("equals").addEventListener("click", function() {
  //get the current number
  var currentNumber = screen.innerHTML;

  // operate on the two numbers the "add" or 'subtract' function (whichever is assigned to 'operation')
  var firstNumberInteger = parseInt(firstNumber);
  var currentNumberInteger = parseInt(currentNumber);
  var result = operation(firstNumberInteger, currentNumberInteger);

  //show result on screen
  screen.innerHTML = result;
});
