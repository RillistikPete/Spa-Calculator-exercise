var button1 = document.getElementById('add');
var button2 = document.getElementById('subtract');
var button3 = document.getElementById('mult');
var button4 = document.getElementById('divd');

//BUTTONS THAT CALL THE FINAL FUNCTION, WHICH TRIGGERS EACH INDIVIDUAL FUNCTION---
button1.addEventListener("click", function(){
  outputAdd.innerHTML = final(parseInt(firstNumber.value), parseInt(secondNumber.value), addNums);
});
button2.addEventListener("click", function(){
  outputSubt.innerHTML = final(parseInt(firstNumber.value), parseInt(secondNumber.value), subtNums);
});
button3.addEventListener("click", function(){
  outputMult.innerHTML = final(parseInt(firstNumber.value), parseInt(secondNumber.value), multNums);
});
button4.addEventListener("click", function(){
  outputDivd.innerHTML = final(parseInt(firstNumber.value), parseInt(secondNumber.value), divdNums);
});

//HOW TO GET VALUES FROM TWO BOXES----
var firstNumber = document.getElementById('first');
var secondNumber = document.getElementById('second');




//  ___________________________________________

//  var outputMult = document.getElementById('multAnswer');

// --THIS IS THE FUNCTION STYLE I CREATED FIRST, WHICH WAS EASIER BUT NOT MVP AT ALL--
// function multNums(){
//   var a = parseInt(firstNumber.value);
//   var b = parseInt(secondNumber.value);
//   outputMult.innerHTML = "Your answer is " + (a * b);
// }
// ___________________________________________




/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */

var outputMult = document.getElementById('multAnswer');
//KEEP IN MIND THESE OUTPUT AREAS COULD BE THE SAME AREA SINCE THE ANSWER IS CHANGING FOR EVERY BUTTON----

function multNums(a, b){
  return a * b;
}


/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
var outputAdd = document.getElementById('addAnswer');

function addNums(a, b){
  return (a + b);
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
 var outputSubt = document.getElementById('subtAnswer');

function subtNums(a, b){
  return (a - b);
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
var outputDivd = document.getElementById('divdAnswer');

function divdNums(a, b){
  return (a / b);
}


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */

//THIS FUNCTION SERVES AS THE MOTHER FUNCTION THAT TRIGGERS ALL THE OTHERS...
//--!!!!! ONLY AFTER YOU PASS ARGUMENTS a, b (DEFINED IN THIS FUNC) TO EACH OF THE OPERATION FUNCTIONS !!!!!!----

function final(a, b, whichOne){
  var newValue = whichOne(a, b);
  return newValue;
}





