// external js file
// Write all JavaScript code here

// for...in loop

/*for(variable/key in array/object) {
    // Code to be executed
}*/

// An array with some elements
let air = ["Nitrogen", "Oxygen", "Carbon Dioxide", "Water Vapour"];

// Loop through all the elements in the array 
for (let love in air) {
  alert('' + air[love] + ' is in the air!');
  document.write('<li>' + air[love] + ' is in the air!</li>');
  console.log('' + air[love] + + ' is in the air!');
}