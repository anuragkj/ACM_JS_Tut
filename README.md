<p align="center">
  <img src="assets/images/js_logo.png" alt="JavaScript logo" title="JavaScript tutorial" width="200" />
</p>
   
Section 07. Operators
=====================   

07.01. What is the Operator?
---------------------
- We know/use many operators since our initial school days, they are things like addition +, multiplication *, subtraction -, open-close round bracket ( ) or square bracket [ ]
- Operators are symbols/keywords that tell the JavaScript engine to `perform some sort of actions`
- JavaScript operators are symbols that are used to perform operations on operands
- Operators used along with our variables and constants to create
expressions to implement logic and algorithms

> **Note**: <br/>
Let us take a simple expression `var sum = 1 + 2`;
- Here 1 and 2 are called `operands` and 
- `=` & `+` are called the `operator`
- `= is the assignment` operator, `+ is the arithmetic` operator

> **Syntax & Example**: `07.01.script.js`
```javascript
// Lets take a look on simple expression 
var sum = 1 + 2;

// Here 1 and 2 are called `operands` and 
// `=` & `+` are called the `operator`
// `= is the assignment` operator, `+ is the arithmetic` operator
```

**JavaScript supports the following types of operators**:
1. Arithmetic Operators
2. Assignment Operators
3. Logical Operators
4. Comparison (or Relational) Operators
5. Conditional (or ternary) Operators
6. String Operators
7. Bitwise Operators

07.02. Arithmetic Operators
----------------------

- Arithmetic operators are used to performing arithmetic operations (just like mathematics - calculations) on numbers/the operands

JavaScript supports the following Arithmetic operators (List of Arithmetic operators):

| Operators | Description                           | Example / Result                                |
| ----------|---------------------------------------|-------------------------------------------------|
| +         | Addition                              | 10 + 20 = 30 (Sum of num1 and num2)             |
| -         | Subtraction                           | 20 - 10 = 10 (Difference of num1 and num2)      |
| *         | Multiplication                        | 10 * 20 = 200 (Product of num1 and num2)        |
| /         | Division                              | 20 / 10 = 2 (Quotient of num1 and num2)         |
| %         | Modulus (Division Remainder)          | 20 % 10 = 0 (Remainder of num1 divided by num2) |
| ++        | Increment                             | var num1 = 100; num1++; Now num1 = 11           |
| --        | Decrement                             | var num1 = 100; num1--; Now num1 = 9            |
| **        | Exponentiation (ES2016 / ES6)         | 2 ** 2 = 4 ; 2 ** 3 = 8 (Multiply num1 for num2 times)  |
| | | |

> **Syntax & Example**: `07.02.script.js`
```javascript
// Arithmetic operators
var num1 = 10;
var num2 = 4;

alert('Addition ' + (num1 + num2)); // 14
alert('Subtraction ' + (num1 - num2)); // 6
alert('Multiplication ' + num1 * num2); // 40
alert('Division ' + num1 / num2); // 2.5
alert('Modulus reminder ' + num1 % num2); // 2
num1++
alert('after Increment ' + num1); // 11
num2--; 
alert('after Decrement ' + num2); // 3

num1 = 10;
num2 = 4;
alert('Exponentiation ' + (num1 ** num2)); // (10 ** 4) = 10* 10 * 10 * 10 = 10000
```

07.03. Assignment Operators
---------------------

- The Assignment operators are used to assign particular values to variables

JavaScript supports the following Assignment operators (List of Assignment operators):

| Operators | Description                           | Example / Result                      |
| ----------|---------------------------------------|---------------------------------------|
| =         | Simple Assignment                     | 10 + 20 = 30; / var total = num1 + num2; (assigns a value to the variable)   |
| +=        | Add and assign                        | var num1 = 10; num1 += 20; Now num1 = 30 (assigns and adds value to the variable, num1 += 20; is equivalent to num1 = num1 + 20;) |
| -=        | Subtract and assign                   | var num1 = 10; num1 -= 5; Now num1 = 5 (assigns and subtract value to the variable, num1 -= 5; is equivalent to num1 = num1 - 5;) |
| *=        | Multiply and assign                   | var num1 = 10; num1 *= 5; Now num1 = 50 (assigns and multiply value to variable, num1 *= 5; is equivalent to num1 = num1 * 5;)    |     
| /=        | Divide and assign                     | var num1 = 10; num1 /= 5; Now num1 = 2 (assigns and divide value to the variable, num1 /= 5; is equivalent to num1 = num1 / 5;)   |
| %=        | Modulus and assign                    | var num1 = 10; num1 %= 5; Now num1 = 0 (assigns and Modulus value to the variable, num1 %= 5; is equivalent to num1 = num1 % 5;)  |
| | | | 

> **Syntax & Example**: `07.03.script.js`
```javascript
// Assignment operators
var num1 = 10;
var num2 = 20

// old methodology
// num1 = num1 + num2;
// console.log(num1); // 30

// new techniques
num1 += num2; 
console.log(num1); // 30

// num2 -= num1; 
// console.log(num2); // 10

// num1 *= num2; 
// console.log(num1); // 200

// num2 /= num1; 
// console.log(num2); // 2
```

07.04. Logical Operators
---------------------

- The Logical operators are used to make decisions based on multiple conditions
- The logical operators are typically used to combine multiple conditional statements and evaluate

JavaScript supports the following Logical operators (List of Logical operators):

| Operators       | Description                           | Example / Result                      |
| ----------------|---------------------------------------|---------------------------------------|
| &&              | Logical AND                           | x && y; (True if both operands like x and y are true) |
| &#124;&#124;    | Logical OR                            | x &#124;&#124; y; (True if either x or y is true)|
| !               | Logical NOT                           | !x; (True if x is not true)           |
| | | |

> **Syntax & Example**: `07.04.01.script.js`
```javascript
// Logical operators - basic examples

// && (Logical AND) - returns true if both operands are true
console.log('true && true: ', true && true);
console.log('true && false: ', true && false);
console.log('false && true: ', false && true);

// ------------------------------

// || (Logical OR) - returns true if one of the operand is true
console.log('true || true: ', true || true);
console.log('true || false: ', true || false);
console.log('false || true: ', false || true);

// ------------------------------

// ! (Logical NOT) True if operand is not true (means I will be true if other is false)
var iamcrazy = true;

var iamnotcrazy = !iamcrazy;
console.log('I am crazy?: ', iamnotcrazy);
console.log('My mother had me tested');
```
<hr/>
<p align="center">
  <img src="assets/images/crazy.png" alt="JavaScript logo" title="JavaScript tutorial" width="400" />
</p>

> **Syntax & Example**: `07.04.02.script.js`
```javascript
// Logical operators - real world scenario/example

// check credit/loan eligibility - (if applicant have HIGH INCOME & GOOD CREDIT SCORE, he is eligible for credit/loan)
var isEarningHighIncome = true;
var isGoodCibilScore = false;
var isEligibleForLoan;

// check eligibility with && Logical AND operator
isEligibleForLoan = isEarningHighIncome && isGoodCibilScore;
alert('isEligibleForLoan: ' + isEligibleForLoan);

// check eligibility with || Logical OR operator
isEligibleForLoan = isEarningHighIncome || isGoodCibilScore;
alert('isEligibleForLoan: ' + isEligibleForLoan);

// ! Logical NOT
var isLoanRefused = !isEligibleForLoan;
alert('isLoanRefused: ' + isLoanRefused);
```

07.05. Comparison (or Relational) Operators
---------------------
07.05. Comparison Operators
---------------------
07.05. Relational Operators
---------------------

- The JavaScript comparison operator compares the two operands
- It compares two values in a Boolean fashion
- The comparison operators are used to determine the similarity and difference between different variables

JavaScript supports the following Comparison (or Relational) operators (List of Comparison (or Relational) operators):

| Operators | Description                           | Example / Result                      |
| ----------|---------------------------------------|---------------------------------------|
| ==  <br/>(Loose Equality Operator)      | Is equal to / identical               | x == y    (True if x is equal to y)     |
| === <br/>(Strict Equality Operator)      | Eqaul/identical value and identical type| x === y (True if x is equal to y, and they are of the same type) |
| !=        | Not equal to / different              | x != y (True if x is not equal to y)           |
| !==       | Not identical    / different value or different type | x !== y )True if x is not equal to y, or they are not of the same type) |
| <         | Less than                             | x < y (True if x is less than y)|
| >         | Greater than                          | x > y    (True if x is greater than y)|
| <=        | Less than or equal to                    | x <= y (True if x is less than or equal to y) |
| >=        | Greater than or equal to                | x >= y (True if x is greater than or equal to y)|
| | | |

> **Syntax & Example**: `07.05.script.js`
```javascript
// Comparison (or Relational) operators
var num1 = 25;
var num2 = 35;
var num3 = "25";
 
alert(num1 == num3);  // true
alert(num1 === num3); // false
alert(num1 != num2);  // true
alert(num1 !== num3); // true
alert(num1 < num2);   // true
alert(num1 > num2);   // false
alert(num1 <= num2);  // true
alert(num1 >= num2);  // false
```

07.06. Conditional (? or ternary) Operator
---------------------
07.06. Conditional Operator
---------------------
07.06. Ternary Operator
---------------------

- Conditional Operator returns a value based on the condition, it is like if-else
- The conditional (ternary) operator is the only JavaScript operator that takes three operands 
- The conditional operator that assigns a value to a variable based on some condition
- This operator is frequently used as a shortcut/short-hand method for the if statement
- **Syntax**: variablename = (condition) ? TRUE value: FALSE value 

| Operators | Description                           | Example / Result                      |
| ----------|---------------------------------------|---------------------------------------|
| ?         | Ternary operator                      | var result = x < y ? 'x is smaller' : 'y is smaller' (short hand method to write if condition)  |
| | | |

> **Syntax & Example**: `07.06.script.js`
```javascript
// Conditional (? or ternary) Operator

// age category
var currentAge = 100;
var category;

category = (currentAge < 18) ? 'Minor' : 'Major';
alert('AGE category: ' + category);

// fees category
var isAuthorisedMember = true;
var fees;

fees = (isAuthorisedMember == true) ? 5 : 10;
alert('fees / charges: ' + fees); 
```

07.07. String Operators
---------------------

Variables can also have string values, `+ operator` can be used to concatenate strings as well as numbers.

There are two operators which can also be used be for strings:

| Operators | Description                           | Example / Result                      |
| ----------|---------------------------------------|---------------------------------------|
| +         | Concatenation                         | string1 + string2 (Concatenation of string1 and string2) |
| +=        | Concatenation assignment              | string1 += string2 (Appends the str2 to the str1) |
| | | |

> **Syntax & Example**: `07.07.script.js`
```javascript
// String Operators
var message1 = "Its your birthday!";
var message2 = " Smile!";
 
alert(message1 + message2); 
 
message1 += message2;
alert(message1); 
```
<p align="center">
  <img src="assets/images/string_concat.png" alt="I haven't watched the show. Hopefully its a meme :)" title="JavaScript tutorial" width="500" />
</p>
   

07.08. Operator precedence
---------------------

- If an expression has more than one operator, the `execution order is defined by their precedence`, or the implicit priority order of operators
- Operator precedence determines/describes the way in which operators are parsed with respect to each other / `order in which operations are performed`
- The operations inside the `parentheses ()` are computed first
- If many operations have the same precedence (like addition and subtraction), they are `computed from left to right`

> **Syntax & Example**: `07.08.script.js`
```javascript
// Operator precedence
var result1 = 10 + 2 * 5
alert('10 + 2 * 5 =  ' + result1); // answer is 20 NOT 60 (12 * 5 ), actually * or multiplication have higher precedence so the actual calculation is like 10 + ( 2*5 ) = 10 + 10 = 20

// change precedence with `parentheses ()` 
var result2 = (10 + 2) * 5;
alert('(10 + 2) * 5 =  ' + result2); // (12) * 5 = 60

// same precedence operators
var result3 = 10 + 5 - 2
alert('10 + 5 - 2 =  ' + result3); // 13 first addition than subtraction

var result4 = 10 + (5 - 2);
alert('10 + (5 - 2) =  ' + result4); // 13 first subtraction ie. ( ) than addition
```

Section 08. Functions
=====================

08.01. What is a Function?
---------------------

- A function is basically a `group of statements that perform specific tasks/operations`
- Functions provide a way to `create reusable code packages` which are more portable and easier to debug
- Functions allow a programmer to `divide a big program` into a number of/several small and manageable functions
- It helps programmers in writing `modular codes`
- The function is a kind of reusable tool where we can write code/functionality to reuse whenever we want (Function allow the code to be called many times without repetition)
- Wrapping up / making smaller chunks of statements / reusable codes together for readability or separation of concern/proper organization is functions – (Grouping of a repetitive task)
- Functions (logical block of code) are one of the most important control structure in any programming language
- In other languages, it might be called `MODULES, SUBROUTINES(SUB-ROUTINES)`
- There are two steps to utilize function: 
  1. create/define a function with `function` keyword  
  2. call/invoke a function

> **Note**: <br/>
Best Practice - First Define function than call/envoke it!

#### 08.01.01. Here are some advantages of using functions:

- **Code reusability** - call a function several times
- **Less coding** - makes our program compact, no need to write lines of code each time
- **Easier to maintain** - changes are done only at one location
- **Easier to eliminate the errors** - fixing errors becomes much easier

#### 08.01.02. Function Definition / Function Declaration / Creating Function

- The function declaration starts by using the `function keyword`, 
- followed by a `unique function name`, 
- a list of `parameters in parentheses` i.e. () (that might be empty), 
- and a statement block surrounded by `curly braces { }`

> **Syntax & Example**: `08.01.script.js`
```javascript
//1. define / declare / create function

function showMessage () {
  //Body of function 
  //code to be executed
  console.log('welcome to JavaScript function');
  alert('welcome to JavaScript function');    
}
```

#### 08.01.03. Function Invocation / Calling a Function / Run a Function

- Defined function can be invoked/called/run from anywhere in the document, by typing `function name followed by a set of parentheses, like functionName()`

> **Syntax & Example**: `08.01.script.js`
```javascript
//2. invoke / call the function

showMessage();
```

#### 08.01.04. Function Naming

Function `denotes an action/task`. The function name should be `brief, as accurate as possible and describe` what the function does, like a `verb`.

Usually, Function name starts with:

- "getSomething" – returns value,
- "createSomething" – create something,
- "calcSomething" – calculate something,
- "checkSomething" – check something and return a boolean, etc.

Examples of function names:
- getSum();
- createFields();
- calcAge();
- checkUserType();

08.02. Types of Function
---------------------

- Regular Function
- Parameterized Function
- Return Type Function (Function returning values)

#### 08.02.01. Regular Function

- Simple/Normal function which we use daily to perform some action/task
<p align="center">
  <img src="assets/images/butter.png" alt="JavaScript logo" title="JavaScript tutorial" width="400" />
</p>

> **Syntax & Example**: `08.02.01.script.js`
```javascript
var food = 'butter';

//1. define / declare / create function
function passButter() {
  //Body of function 
  //code to be executed
  console.log('Please pass the ' + food);
  alert('Please pass the ' + food);    
}

//2. invoke / call the function
passButter();
```

#### 08.02.02.01. Parameterized Function

- One can pass data to functions using parameters (function arguments)
- You can specify parameters when you define your function to accept input values at run time

> **Syntax & Example**: `08.02.02.01.script.js`
```javascript
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
```

#### 08.02.02.02. Default Values for Function Parameters ES6

With ES6, now you can specify default values to the function parameters. This means that if no arguments are provided to the function when it is called these default parameters values will be used.

> **Syntax & Example**: `08.02.02.02.script.js`
```javascript
// Parameterized function with default parameters

//1. define / declare / create function
function sayHello (name = 'User') {
  //Body of function 
  //code to be executed
  console.log('Hello ' + name);
  alert('Hello ' + name);    
}

//2. invoke / call the function
sayHello();

sayHello('Sheldon');

// ------------------------------

var total;

function calculateSum (num1=1, num2=2) {
  total = num1 + num2;
  console.log(total);
}

calculateSum();
calculateSum(100, 200);
```

#### 08.02.03. Return Type Function (Function returning values)

- A function can `return a value` back to the script that called the `function, as a result, using the return statement`
- We can call a function that returns a value and use it in our program
- The return statement usually placed as the last line of the function

> **Syntax & Example**: `08.02.03.script.js`
```javascript
// Return type function
//1. define / declare / create function
function getSum (num1, num2) {
  //Body of function 
  //code to be executed
  var sum = num1 + num2;
  return(sum);
}

//2. invoke / call the function
console.log(getSum(10,20));
console.log(getSum(100,200));

var total = getSum(50,50);
alert(total);
```

08.03. Different ways to define Function
---------------------

The syntax that we've used before to create functions is called `function declaration`. There is another syntax for creating a function that is called a `function expression` and `Immediately invoked function expression (IIFE)`

#### 08.03.01. function declaration (Regular/Normal function)

#### 08.03.02. function expression

- Variables contain the expressions of a function
  - Anonymous function expression
  - Named function expression

> **Syntax & Example**: `08.03.02.01.script.js`
```javascript
// function declaration (Regular / normal function)
function getSum1(num1, num2) {
  var total = num1 + num2;
  return total;
}

// ------------------------------

// function expression - Anonymus
var getSum2 = function(num1, num2) {
    var total = num1 + num2;
    return total;
};

alert(getSum2(10,20));

// ------------------------------

// assign function to another variable
var sum1 = getSum2;
alert(sum1(100,200));
```

> **Syntax & Example**: 
```javascript
// function expression - named
var getSum2 = function getTotal(num1, num2) {
  var total = num1 + num2;
  return total;
};

alert(getSum2(10,20));

// ------------------------------

// assign function to another variable
var sum1 = getSum2;
alert(sum1(5,10));
```

#### 08.03.03. Immediately invoked function expression (IIFE)

- It runs as soon as the browser finds it
- Declare and run the function at the same time

> **Syntax & Example**: `08.03.03.script.js`
```javascript
// Immediately invoked function expression (IIFE)
(function () {
  console.log('Welcome to Immediately invoked function expression (IIFE)');
}());


(function(userName) {
  console.log('Welcome', userName);
})('Sheldon');
```

08.04. String Methods and Concatenation
---------------------

> **Syntax & Example**: 
```javascript

const firstName = 'Sheldon';
const lastName = 'Cooper'

const fullName = (firstName) + (lastName);
console.log(fullName);
console.log(typeof fullName);

// concatenation
console.log(firstName + ' ' + lastName);

console.log('Hello ' + firstName + ' ' + lastName + 'Welcome to JavaScript!');

// append
let name1 = 'Sheldon ';
let name1 += 'Cooper';
console.log(name1);

// concat() method
console.log(firstName.concat(' ', lastName));

// length
console.log(firstName.length);

// change case
console.log(firstName.toLowercase());
console.log(firstName.toUppercase());

// escaping
// let statement1 = 'wait I'm coming, that's good';
let statement1 = "wait I'm coming, that's good";
let statement2 = 'wait I\'m coming, that\'s good';

// string array - get specific character from string like an array
console.log(firstName[0]);

// indexOf
console.log(firstName.indexOf('i'));
console.log(firstName.lastIndexOf('a'));

// charAt()
console.log(firstName.charAt(2));

// get last character from string
console.log(firstName.charAt(firstName.length - 1));

// replace();
let replaceString = ('Sheldon', 'DJ');
console.log('My name is:', replaceString); 

// substring();
console.log(firstName.substring(0,4));

// slice();
console.log(firstName.slice(0,4));

// slice(); negative number starts from backside
console.log(firstName.slice(-2));

// includes();
let message2 = 'Hello Sheldon, welcome to JavaScript';
console.log(message2.includes('Hello'));
console.log(message2.includes('Hi'));

// split()
let message2 = 'Hello Sheldon, welcome, to JavaScript';
console.log(message2.split(','));
console.log(message2.split(' '));

let courses = 'If I Could, I Would But I Can't So I Shan't';
console.log(courses.split(','));

```
<p align="center">
  <img src="assets/images/split.png" alt="JavaScript logo" title="JavaScript tutorial" width="400" />
</p>
08.05. Template String
---------------------
08.05. Template Literals
---------------------

- ES6 new feature `Strings Template` offers a convenient way to work with string concatenation/interpolation
- Template literals provide an easy and clean way to create multi-line strings and perform string interpolation
- Intuitive expression interpolation for single-line and multi-line strings
- Use `back-tick (grave accent)` character and `{ var name in curly brace }`, no + plus sign required
- The best part of Template Literals (Template Strings) is we can `use 'single' "double" quotes inside`

- It is part of ES6 but compatible with all the modern browsers and its latest versions

> **Syntax & Example**: 
```javascript

//old plain javascript approach
let user = 'Sheldon';
let greetMessage1 = 'Welcome' + ' ' + user + ' ' + 'to JavaScript.';

console.log(greetMessage1);
 
console.log('// ------------------------------');

const firstName = 'Sheldon';
const lastName = 'Cooper'
const course = 'JavaScript'

const fullName = `Hey ${firstName} ${lastName} Welcome to ${course}.`

console.log('// ------------------------------');

//ES6 Template Literals (Template Strings) approach
let greetMessage2 = `Hello ${firstName}, How are you?`;

console.log(greetMessage2);

console.log('// ------------------------------');
// ------------------------------

//ES6 multi-line string
let greetMessage3 = `ES6 Template Literals (Template Strings):
                    With Template Literals (Template Strings)
                    we can add multiple lines in string concatenation/interpolation
`;

console.log(greetMessage3);

let greetMessage4 = ES6 Template Literals (Template Strings):
                    With Template Literals (Template Strings)
                    we can add multiple lines in string concatenation/interpolation
;

console.log(greetMessage4);
```

Section 09. Loops
=====================  
Section 09. Loops and Iterations
=====================

- Loops are used to execute the `same block of code again, with a different value, until a certain condition is met`
- Loops can execute/repeat a block of code (an action) a number of/several times
- The basic idea behind a loop is to `automate the repetitive tasks within a program to save time and effort`
- It makes the `code compact`
- It is mostly used in array or object (to iterate through series)
- Loops/iterations is an instruction repeat until a specific condition is reached

### Different Types of Loops in JavaScript:

1. for loop
2. while loop
3. do...while loop
4. for...in loop
5. for...of loop (ES6)
6. for...each

09.01. The for loop
---------------------

- The `For` loop is used to run a piece of code a `set amount of times`
- Loops through a block of code until the `counter reach a specified number`
- The for loop `repeats a block of code until a certain condition` is met
- The for loop is the most simple/compact form of looping
- For loop consists of 3 statements (), mostly `i = index` is used for loop initialization

> **Syntax & Example**: `09.01.01.script.js`
```javascript
// for loop

/* for (statement 1; statement 2; statement 3) {
  // Code to be executed
} */


/* for(variable definition/index/initialization; condition checking; increment/decrement expression) {
  // Code to be executed
} */

for (let i=1; i<=5; i++) {
  alert('Hello, The current index/num is: ' + i);
  document.write('<li>Hello, The current index/num is: ' + i + '</li>');
  console.log('Hello, The current index/num is: ' + i);
}
```

### 09.01.01. The for loop - Reverse order

> **Syntax & Example**: `09.01.02.script.js`
```javascript
// for loop - reverse order

for (let i = 5; i >= 1; i--) {
  alert('Hello, The current index/num is: ' + i);
  document.write('<li>Hello, The current index/num is: ' + i + '</li>');
  console.log('Hello, The current index/num is: ' + i);
}
```

### 09.01.02. The for loop - Find Even or Odd number

> **Syntax & Example**: `09.01.03.script.js`
```javascript
// for loop - to find out odd even number

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log('The current index/num is EVEN : ' + i);
  } /* else {
    console.log('The current index/num is ODD : ' + i);
  } */
}
```

09.02. The while loop
---------------------

- Loops through a block of code until the specified condition evaluates to true
- In For loop, a variable is part of a loop, but in While loop, we need to declare variable externally

> **Syntax & Example**: `09.02.01.script.js`
```javascript
// while loop

/*while(condition) {
  // Code to be executed
}*/

let i = 1;

while (i <= 5) {
  alert('Hello, The current index/num is: ' + i);
  document.write('<li>Hello, The current index/num is: ' + i + '</li>');
  console.log('Hello, The current index/num is: ' + i);
  i++;
}
```

09.03. The do while loop
---------------------
09.03. The do...while loop
---------------------

- The do...while loop is similar to the while loop except that the `condition check happens at the end of the loop`
- The do...while loop will always be `executed at least once (before checking if the condition is true)`, even if the condition is false

> **Syntax & Example**: `09.03.01.script.js`
```javascript
// do...while loop

/*do {
    // Code to be executed
}
while(condition);*/

let i = 1;

do {
  alert('Hello, The current index/num is: ' + i);
  document.write('<li>Hello, The current index/num is: ' + i + '</li>');
  console.log('Hello, The current index/num is: ' + i);
  i++;
}
while (i <= 5); 
```

09.04. The for in loop
---------------------
09.04. The for...in loop
---------------------

- The for-in loop is a special type of a loop that `iterates over the properties of an object or the elements of an array`

<p align="center">
  <img src="assets/images/love.png" alt="JavaScript logo" title="JavaScript tutorial" width="400" />
</p>

#### 09.04.01. The for...in Loop - array

> **Syntax & Example**: `09.04.01.script.js`
```javascript
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
```

#### 09.04.02. The for...in Loop - object

> **Syntax & Example**: `09.04.02.script.js`
```javascript
// for...in loop

/*for(variable/key in array/object) {
    // Code to be executed
}*/

// An object with some properties 
let objEmployee = {'emp_name': 'Sheldon', 'emp_addres': 'Mumbai', 'emp_id': '029', 'emp_age':35};

// Loop through all the properties in the object  
for (emp in objEmployee) {
  alert('Employee '+ emp + ' is: ' + objEmployee[emp]);
  document.write('<li>Employee '+ emp + ' is: ' + objEmployee[emp] + '</li>');
  console.log('Employee '+ emp + ' is: ' + objEmployee[emp]);
}
```

#### 09.04.03. The for...in Loop - Inbuilt JavaScript objects

> **Syntax & Example**: `09.04.03.script.js`
```javascript
// for...in loop

/*for(variable/key in array/object) {
    // Code to be executed
}*/

// Loop through all the properties in the inbuilt object - window, document, navigator
for (props in window) {
  // alert('document object properties ' + props);
  document.write('<li>document object properties ' + props + '</li>');
  console.log('document object properties ' + props);
}
```

09.05. The for of loop
---------------------
09.05. The for...of loop (ES6)
---------------------

- Loops over `iterable objects such as arrays, strings`, etc.
- ES6 introduces a new for-of loop which allows us to iterate over arrays or strings very easily
- The code inside the loop is executed for each element of the iterable object

> **Syntax & Example**: `09.05.01.script.js`
```javascript
// for...of loop

/*for(element in array/string) {
  // Code to be executed
} */

// Iterating over an array
let arrDays = ["Monday", "TuesDay", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

for (let day of arrDays) {
  console.log(day);
  document.write('<li>' + day + '</li>');
}

// Iterating over string
let name = 'JavaScript';
for (let letter of name) {
  document.write(letter + ',');
  console.log(letter + ',');
}
```

09.06. Break and Continue statement
---------------------

- `break` and `continue` keywords/statement can change `how the loop behaves`
- `break` and `continue` keywords can be used in all loops to stop or continue the loop
- The `break` statement is used to exit a loop early, to "jump out" of a loop, stops executing/running a loop
- The `continue` statement tells the interpreter to immediately start the next iteration of the loop and skip the remaining code block

> **Syntax & Example**: `09.06.01.script.js`
```javascript
// break continue statement

/* break */
let arrDays = ["Monday", "TuesDay", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

let i = 1;
while (i <= 10) {
  if (i == 5) {
    break;
  }
  console.log(i);
  i++
}

console.log('// ------------------------------');

for (let i = 0; i <= arrDays.length; i++) {
  if (i == 3) {
    break;
  }
  console.log(arrDays[i]);
}

console.log('// ------------------------------');

/* continue */
i = 1;
while (i <= 20) {
  if (i % 2 == 0) {
    // console.log('Even Number ', i);
    i++;
    continue; // skip rest of the loop body

    i + 100; // non of use 
    console.log('just in even num continue'); // non of use 
  }
  console.log('Odd Number ', i);
  i++;
}

console.log('// ------------------------------');

for (i = 1; i <= 10; i++) {
  if (i === 5) {
    continue; // skip rest of the loop body
    console.log('just after 5 continue...'); // non of use 
  }
  console.log(i);
}

console.log('// ------------------------------');

for(let int = 0; int < 10; int++) {

  if(int === 2) {
    console.log('2 is favorite EVEN number');
    continue;
  }

  if(int === 5) {
    console.log('at 5 stop the loop');
    break;
  }

  console.log('current Number is:', int); 
}

```

09.07. for each loop
---------------------
09.07. for...each loop
---------------------

> **Syntax & Example**: ``
```javascript

let arrDays = ["Monday", "TuesDay", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

arrDays.forEach(function(day)){
  console.log(day);
}

```

Section 10. Conditions
=====================
Section 10. Conditions - Control Flow
=====================

- Conditional statements are used to perform different action based on different condition
- Conditional statements allow the developer to make correct decisions and perform right actions as per condition
- It helps to perform different actions for different decisions
- We can use conditional operator to check our condition: >, <, >=, <=, ==, !=, ===

#### We can use the following conditional statements in JavaScript to make decisions:

1. If Statement
2. If...else Statement
3. If...else if...else Statement
4. Switch...Case Statement

10.01. The if statement
---------------------
10.01. The if statement and comparison operators
---------------------

- If the conditional statement is the simplest and basic control statement make decisions and execute statements conditionally
- The if statement is used to execute a block of code `only if the specified condition evaluates to true`
- It evaluates the content only `if an expression is true`

If conditional statements are used to evaluate some kind of condition and do something/perform some actions based on the result

> **Note**: <br/>
Use `if` to specify a block of code to be executed, `if a specified condition is true`

> **Syntax & Example**: `10.01.01.script.js`
```javascript
// if conditional statement

/*if(condition/expression) {
  // Code to be executed if condition/expression is true
}
*/

let user = 'Sheldon';

if (user == 'Sheldon') {
  console.log('Welcome Sheldon!');
  window.alert('Welcome Sheldon!');
}

if (user == 'Sheldon') {
  console.log('Welcome Authorised User: ' + user + '!');
  window.alert('Welcome Authorised User: ' + user + '!');
}

// ------------------------------

let age = 20;

if (age >= 18) {
  console.log('MAJOR! Eligible for Voting');
  window.alert('MAJOR! Eligible for Voting');
}

// ------------------------------

let currentHours = 10;

if(currentHours < 12) {
  console.log('Good Morning!');
  window.alert('Good Morning!');
}

if(currentHours >=6 && currentHours < 12) {
  console.log('Good Morning!');
  window.alert('Good Morning!');
}
```

10.02. The if else statement
---------------------
10.02. The if...else statement
---------------------

- The JavaScript `if...else statement` is used to execute the code `weather condition is true or false`
- The developer can enhance the decision-making capabilities by providing an alternative choice through adding an `else` statement to the `if` statement
- The condition can be any expression that evaluates to true or false
- If the condition evaluates to true, statements_1 are executed; otherwise, statements_2 are executed

> **Note**: <br/>
Use `else` to specify a block of code to be executed, `if the same condition is false`

> **Syntax & Example**: `10.02.01.script.js`
```javascript
// if...else conditional statement

/*if(condition/expression){  
// content to be executed if condition is true - statements_1  
}  
else{  
// content to be executed if condition is false - statements_2
}*/

let user = 'Ambar';

if (user == 'Sheldon') {
  console.log('Welcome Sheldon!');
  window.alert('Welcome Sheldon!');
} else {
  console.log('Welcome Guest!');
  window.alert('Welcome Guest!');
}

// ------------------------------

let age = 15;

if (age >= 18) {
  console.log('MAJOR! Eligible for Voting');
  window.alert('MAJOR! Eligible for Voting');
} else {
  console.log('MINOR! NOT Eligible for Voting');
  window.alert('MINOR! NOT Eligible for Voting');
}

// ------------------------------

let currentHours = 10;

if(currentHours < 12) {
  console.log('Good Morning!');
  window.alert('Good Morning!');
} else {
  console.log('Good Evening!');
  window.alert('Good Evening!');
}
```

10.03. The if else if else statement
---------------------
10.03. The if...else, if...else statement
---------------------

- The `if...else if...else` a special statement that is used to `combine multiple if...else statements`
- It is an advanced form of if...else that allows us to `make a correct decision out of several conditions`

> **Note**: <br/>
Use `else if` to specify a new condition to test, `if the first condition is false`

> **Syntax & Example**: `10.03.01.script.js`
```javascript
// If...else if...else conditional statement

/*if(condition/expression 1) {
    // Code to be executed if condition1 is true statements_1
} else if(condition/expression 2) {
    // Code to be executed if the condition1 is false and condition2 is true statements_2
} else {
    // Code to be executed if both condition1 and condition2 are false statements_3
}*/

let num1 = 200;
let num2 = 100;

if (num1 == num2) {
  console.log('Both numbers are equal');
} else if (num1 < num2 ) {
  console.log('Number2 is greater!');
} else {
  console.log('Number1 is greater!');
}

// ------------------------------

let age = 15; 

if (age >= 60) {
  console.log('SINIOR CIRIZEN!');
} else if (age < 18) {
  console.log('MINOR!');
} else {
  console.log('MAJOR - Middle Age!');
}

// ------------------------------

let currentHours = 15;

if(currentHours >=6 && currentHours< 12) {
  console.log('Good Morning!');
  window.alert('Good Morning!');
} else if (currentHours >12 && currentHours <=18) {
  console.log('Good AfterNoon!');
  window.alert('Good AfterNoon!');
} else {
  console.log('Good Evening!');
  window.alert('Good Evening!');
}
```

10.04. The switch case statement
---------------------
10.04. The switch...case statement
---------------------

- The switch...case statement is alternative to an if...else if...else statement, both do almost the same thing
- This matches the `case` and the `value of condition` and if the case matches, the subsequent block is executed and if none of the case matches `default block` is executed
- The JavaScript switch statement is used to execute one code from multiple blocks of expressions

> **Note**: <br/>
Use `switch` to specify many `alternative blocks of code to be executed`

> **Syntax & Example**: `10.04.01.script.js`
```javascript
// switch...case conditional statement

/* switch(variable/expression){
  case value1:
    // Code to be executed if variable/expression === value1
    break;
  case value2:
    // Code to be executed if variable/expression === value2
    break;
  default:
    // Code to be executed if variable/expression is different from all values
} */

let grade = 'B'; // A.B,C, or something

switch (grade) {
  case 'A':
    console.log('Great Job! - A Grade');
    break;
  case 'B':
    console.log('Good! - B Grade');
    break;
  case 'C':
    console.log('Congratulations! - Passed');
    break;
  default:
    console.log('Sorry! - Failed...Keep trying!');
    break;
}

// ------------------------------
```
<p align="center">
  <img src="assets/images/food.png" alt="JavaScript logo" title="JavaScript tutorial" width="300" />
</p>

```
let sweets = ''; //cake, chocolates, biscuits

switch (sweets) {
  case 'chocolates':
    console.log('Chubby Chocolates!');
    break;
  case 'cake':
    console.log('Happy BirthDay Cake!');
    break;
  case 'biscuits':
    console.log('Enjoy Biscuits!');
    break;
  default:
    console.log('No Sweets! Try some other sweets!');
    break;
}
```

```
// ------------------------------

const color = 'red';

switch(color) {
  case 'red':
    console.log('The Dark RED');
    break;
  case 'green':
    console.log('Go Green');
    break;
  case 'blue':
    console.log('Boys are Blue');
    break;
  case 'yellow':
    console.log('Golden Yellow');
    break;
  default:
    console.log('Its some other Color, Enter correct color');
    break;
}

// ------------------------------

let currentDate = new Date();
let currentDay;

switch(currentDate.getDay()) {
  case 0:
    currentDay = 'Sunday';
    break;
  case 1:
    currentDay = 'Monday';
    break;
  case 2:
    currentDay = 'Tuesday';
    break;
  case 3:
    currentDay = 'Wednesday';
    break;
  case 4:
    currentDay = 'Thursday';
    break;
  case 5:
    currentDay = 'Friday';
    break;
  case 6:
    currentDay = 'Saturday';
    break;
}

console.log(`Today is ${currentDay}!`);

```
<p align="center">
  <img src="assets/images/bazinga.png" alt="JavaScript logo" title="JavaScript tutorial" width="400" />
</p>

10.05. Objects in  Javascript 
---------------------
10.05.01 Objects
- An object in javascript is a variable that can have multiple attributes and methods.
- Attributes of objects are values that represent different features of that  class.
- Methods of objects are actions that can be performed by the class using functions.

> **Syntax & Example**: `10.05.01.script.js`
> Let us make an object to represent a person, we will begin with atributes of the person such as their name and age.
```javascript
const person = {
  firstName: "Sheldon",
  lastName : "Cooper",
  age      : 35
};

// We can view these atributes with the syntax variable_name.atribute_name
console.log("The name of this person is: " + person.firstName + " " + person.lastName);
```

> We can also alter these atributes to update their values
```javascript
console.log("Current age: " + person.age);

person.age += 1;

console.log("Current age: " + person.age);
```

> Javascript also allows us to add and remove atributes of a class
```javascript
// We can add an atribute using the syntax variable_name.atribute_name = value
person.iq = 187;
console.log("Sheldon's iq: " + person.iq);

// We can also delete these atributes using the delete keyword
delete person.iq;

// This line will now give us an error as the atribute has been deleted
console.log("Sheldon's iq: " + person.iq);
```
> If we need to check if and object has a paticular atribute we can use the hasOwnProperty method which is inbuilt into all classes

```javascript
console.log("Do we have this person's iq?\n" + person.hasOwnProperty("iq"));
```


- We can now add our own methods to our class using functions
```javascript
const person = {
  firstName: "Sheldon",
  lastName : "Cooper",
  age      : 35,
  greetPenny : function() {
    console.log("Penny!\nPenny!\nPenny");
  }
};

person.greetPenny(); // This calls the method greetPenny 
```



10.05.02 Lookup Tables

> In javascript, we can use objects to create a lookup or mapping between different values.
> A lookup is a variable that maps an input value to a paticular output value.

```javascript
// This is a lookup table that maps names to mobile numbers
var mobile_number_lookup = {"Penny":58538902, "Raj" : 98745689, "Sheldon" : 789023456};

// To get the corresponding mobile number from a name we use the syntax variable[input value]
console.log("Raj's number is: ", mobile_number_lookup["Raj");
```
10.05.03 Object Freeze
> If we want to prevent our object or lookuptable from having any future changes, we make use of the Object.freeze function.
```javascript
const person = {
  firstName: "Sheldon",
  lastName : "Cooper",
  age      : 35
};
// We can chage atributes like normal
person.age = 37;
console.log(person.age);

// We now freeze to prevent future changes
Object.freeze(person);

// This will not take effect since this object is now frozen
person.age = 35;

console.log(person.age);
```


10.06. Regular Expressions (RegEx) in  Javascript 
---------------------

> Regular Expressions is a type of format for strings that allows you to easily find and replace characters as you like.

10.06.01 Search
> The search method allows us to get the index of the substring in the text. 
> Note that this search is regardless of case sensitivity.

```javascript
var text = "Big Bang Theory";

console.log(text.search(/Theory/i));
```

10.06.02 Replace
> The replace method allows us to replace a substring with any string of our choice.

```javascript
var text = "Big Bang Theory";

console.log(text.replace(/Big/i, "Massive"));
```

10.06.03 The Test Method
> This checks if the substring contains a string that meets the following criteria.
```javascript
var expression = /Season 1/ // this expression will return true for all strings with the term Season 1

console.log(expression.test("Season 1 Episode 12"));
console.log(expression.test("Season 2 Episode 12"));
```

10.06.04 The | Operator
> This operator searches for any of the alternatives provided by the user
```javascript
var expression = /Season 1|Season 2/g // this expression will return true for all strings with Season 1 or Season 2

console.log(expression.test("Season 1 Episode 12"));
console.log(expression.test("Season 2 Episode 12"));
console.log(expression.test("Season 3 Episode 12"));
```
10.06.05 The Match Function
> This returns all instances where a substring matching the regex expression is found.
```javascript
var text = "Big Bang Theory";

console.log(text.match(/Big/g));
```

10.06.06 RegEx Wildcards
> Wildcards are placeholders that can represent multiple characters in a string.

* \d represents numbers
* \s represents whitespace
* \b represents the beginning of a word
*  \* represents zero or more whitespaces
* \A represents the start of a string
* [a-z | A-z] can represent any character
```javascript
var expression = /[a-z | A-z]/g // checks if the string contains an alphabet

console.log(expression.test("a"));
console.log(expression.test("xy"));
console.log(expression.test("1"));
```

Section 11. Promise
=====================  

What is a promise?

Why is a JavaScript ES6 `promise` called a 'promise'? Here is a snippet from the *Oxford Dictionary of English* definition of 'promise':

> **promise** |ˈprɒmɪs|<br>
noun<br>
1 a declaration or assurance that one will do something or that a particular thing will happen

This pretty well sums up what a promise means in JavaScript: something that will be delivered in the future (if and when the promise is *fulfilled*).

Traditionally, *callbacks* are used as a way to receive the data that is delivered asynchronously (meaning that the data is not likely to be available at the time it is requested but can be expected some time later). Using callbacks can quickly become unwieldy when dealing with many asynchronous events (e.g., ajax calls), especially when they depend on each other (google for *callback hell*).

JavaScript ES6 introduces promises as a better alternative for callbacks when dealing with asynchronous events.

We can state a number of simple facts about ES6 promises:

- A promise is a JavaScript object (`typeof somePromise === 'object'`) that serves as a placeholder for a (future) value.
- Because a promise is an ordinary JavaScript object you can pass it around as an argument to a function, return it from a function, assign it to a variable, push it to an array, etc.
- You can receive the 'promised' value by calling the `.then()` method of the promise, passing it a function that will receive that value as its argument as soon as it is available.
- You can create a promise by calling the ES6 `Promise` constructor function with `new` (see Listing 1 below), then call `resolve()` when results are ready or `reject()` on detecting an error.
- Sometimes you can get a ready-made promise by calling an appropriate API or library function, like the `fetch()` Web API function in Listing 1.
- Internally, a promise can be in one of three states:
   - **pending**: the asynchronous result is still awaiting delivery
   - **fulfilled**: the asynchronous result has been delivered and is available (`resolve()` was called)
   - **rejected**: an error was encountered: the promise could not be fulfilled (`reject()` was called)
- A promise that is no longer pending because it was either fulfilled or rejected is said to be _settled_.
- A promise that is _settled_ has reached its final state. Its state and value can no longer be changed. It has become _immutable_. Subsequently calling `resolve()` or `reject()` does no longer affect the outcome of the promise.

## Example code

Listing 1 shows an example based on an asynchronous XMLHttpRequest that we will use throughout the rest of this discussion.

```js
'use strict';

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status < 400) {
          resolve(xhr.response);
        } else {
          reject(new Error(xhr.statusText));
        }
      }
    };
    xhr.send();
  });
}

// alternative:
// const fetchJSON = url => fetch(url).then(res => res.json());

const url = 'http://api.nobelprize.org/v1/laureate.json?gender=female';

fetchJSON(url)
  .then(data => renderData(data))
  .catch(err => renderError(err));

function renderData(data) {
  console.log(data);
}

function renderError(err) {
  console.error(err.message);
}
```

Listing 1. Asynchronous `XMLHttpRequest` (and `fetch` alternative) using a promise.

The `fetchJSON()` function in Listing 1 returns a `promise` that resolves to a value converted from JSON data received from a remote API end point. The alternative version of `fetchJSON()` (commented out here) uses a more modern browser function that natively returns a promise.


## The .then() method

A promise exposes a `.then()` method through which you can obtain its fulfilled value or an error value in the case the promise was rejected:

```js
somePromise.then(onFulfilled, onRejected);
```

The `.then()` method takes as its parameters two **optional** functions, the first one dealing with the 'happy' scenario (the promise is fulfilled) and the second one dealing with the error case (the promise is rejected). If you are only interested in the success case you can leave out the second parameter:

```js
somePromise.then(data => {
  // ...
});
```

If you are only interested in the error case, you can pass `null` for the first argument:

```js
somePromise.then(null, err => {
  //...
});
```

or you can use another method available on a promise, `.catch()`, which is just a shorthand for calling `then()` with `null` as its first argument:

```js
somePromise
  .then(data => {
    // ...
  })
  .catch(err => {
    // ...
  });
```

Note that the `onFulfilled` and `onRejected` handler functions always execute asynchronously. When the promise is settled, the `onFulFilled` or `onRejected` handler is placed on the event/callback queue. They execute when the currently executing JavaScript code runs to completion, causing the [call stack](./event_loop.md#call-stack) to become empty and enabling the event loop to process the next event from the queue. This holds true even if the promise is immediately fulfilled or rejected, as in this example:

```js
Promise.resolve(42)
  .then(data => console.log(data));

console.log('after promise');

// console output:
// after promise
// 42
```

This example also shows how you can create a promise that is immediately resolved. There is no need to use `new` or to pass a `(resolve, reject) => {}` function to the `Promise` constructor. Similarly you can create a promise that is immediately rejected:

```js
Promise.reject(new Error('oops'))
  .catch(err => console.log(err.message));

console.log('after promise');

// console output:
// after promise
// oops
```

## Promise chaining

It is important to understand that the `.then()` method returns a new promise that resolves to the return value of `onFulfilled` (if specified) in case of the 'happy' scenario or the return value of `onRejected()` (if specified) in case of an error. If the return value of these functions is a plain JavaScript value, the new promise is immediately fulfilled with that value. If the return value is yet another promise then the outcome is determined by the inner promise, once settled. If the function does not return a value, the new promise is immediately fulfilled with the value `undefined`.

Because `.then()` (and `.catch`) return new promises, you can chain them together such that your code can be read as: do *this*, then do *that* and then *that*, etc.:

```js
function fetchAndRender(url, otherUrl) {
  fetchJSON(url)
    .then(data => {
      renderData(data);
      return fetchJSON(otherUrl);
    })
    .then(otherData => {
      renderOtherData(otherData);
    })
    .catch(err => {
      renderError(err);
    });
}

fetchAndRender();
```

Listing 2. Chaining of `then` and `catch`

Let's examine Listing 2 in a bit more detail. There two calls to `fetchJSON()`. Errors are handled in one place, by means of the `.catch()` method that terminates the promise "chain".

If you embed another promise inside the function that you pass to the `.then()` method (in Listing 2 this is done in the first `.then()`) you should return that promise as the function's return value. If you don't return the promise, there is no way for the `.catch()` at the end of the chain to "see" a `reject()` of the inner promise, leaving the rejection unhandled.

In case a promise in the chain is rejected due to some error, the promise chain will be traversed until an `onRejected` handler (e.g., in a terminating `.catch()` method) is found. All intermediate `onFulfilled` handlers (e.g. `.then()`) will be skipped.

Handling errors at the end of a promise chain is a major advantage over the repetition of error handling code in the case of callbacks.

Note however that a `.catch()` method does not necessarily have to be the last method in the chain. It can be used to handle errors midway. As mentioned previously, the `.catch()` method returns a new promise which can be used to provide some "fallback" value in case of errors.

In the example below a promise is created that is immediately rejected. The promise is subsequently "consumed" twice.

1. In the first case ('consumer 1'), the rejection is caught by a `.catch()` method and the rejection value `'bad'` is printed on the console.

2. In the second case ('consumer 2'), the rejection is also caught by a `.catch()` method, but now the catch handler completely ignores the rejection value and just returns the fallback value `'good.`. This becomes the fulfilled value of the promise returned by `.catch()`. The next `.then()` in the chain, completely oblivious that an error ever occurred, now prints the fulfilled value `'good'` on the console.

```js
const promise = Promise.reject('bad');

// consumer 1
promise
  .catch(console.log); // -> "bad"

// consumer 2
promise
  .catch(() => 'good')
  .then(console.log); // -> "good"
```

## Promise.all()

There may be situations where you want to execute multiple promises in parallel and wait until all promises are resolved. Of course, these promises must not be interdependent (i.e. a promise must not depend on the result of another promise running in parallel). The `Promise.all()` method accepts an array (or more precisely, an _iterable_) of promises. It return a new promise that is resolved when all promises in the array are resolved, or rejected as soon as one of the promises in the array is rejected.

The fulfilled value of the new promise is an array of fulfilled values of the individual promises passed to `Promise.all()`, in the same order.

Project
=====================  
[Click here](https://anuragkj.github.io/JS_Project/) for a simple project made by the concepts we learnt till now. Try making more!!