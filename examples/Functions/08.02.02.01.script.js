// external js file
// Write all JavaScript code here

// Parameterized function

//1. define / declare / create function
function passButter(food) {
  //Body of function 
  //code to be executed
  console.log('Please pass the ' + food);
  alert('Please pass the ' + food);    
}

//2. invoke / call the function
passButter('butter');

passButter('butter!!!');

// ------------------------------

var total;

function calculateSum (num1, num2) {
  total = num1 + num2;
  console.log(total);
}

calculateSum(10, 20);
calculateSum(100, 200);