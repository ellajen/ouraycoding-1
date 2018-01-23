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

var allButtons = document.getElementsByClassName('num');

for (var i = 0; i < allButtons.length; i += 1) {
  console.log('Messing with button '+i);
  var button = allButtons[i];
  button.addEventListener("click", function() {
      var buttonLabel = this.innerHTML;
      var number = parseInt(buttonLabel);
      addNumberToScreen(number);
  });
}

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

//      indexes: 0  1  2  3     4        5    6
// var array = [1, 4, 3, 2, "string", "ella", 9]
// var firstnumber = array[0]; // 1
// var secondnumber = array[1]; // 4

// array.length // 7
// var lastthinginarray = array[array.length - 1];
// var lastthinginarray = array[6]; // 9

var allTics = document.getElementsByClassName('tic');
// allButtons = [htmlElement, htmlElement, htmlElement, ...]

var lastMove = 'X';

for (var i = 0; i < allTics.length; i += 1) {
  var tic = allTics[i]; //get the current tic from our list
  tic.addEventListener("click", function() {
      var currentMove;
      if (lastMove === 'X') {
          currentMove = 'O';
      } else {
          currentMove = 'X';
      }

      this.innerHTML = currentMove;
      lastMove = currentMove;
  });
}
