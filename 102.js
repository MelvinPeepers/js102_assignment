//* JavaScript Functions

//! Functions are reusable blocks of code that perform a specific task.
//! A function takes an input, does some processing and generates an output

//* Function without parameters
function HelloWorld() {
  console.log("Hello World!");
}

//~ Calling the function
HelloWorld();

//* Function with parameters
function addTogether(a, b) {
  return a + b;
}

//~ Calling the function with arguments
let answer = addTogether(5, 10);
console.log(answer);

//* Function Expression
let add = function (a, b) {
  return a + b;
};

//~ Call the function
let result = add(4, 3);
console.log(result);

//* Arrow Function
let dogAge = (number) => {
  return number * 7;
};

//~ Calling the arrow function
let age = dogAge(10);
console.log(age);

//*Scopes

//! In JavaScript, a scope defines the region of your code where a variable is visible and can be accessed. Scopes help manage the lifetime and accessibility of variables.

//* Global
//! Variables declared outside of any function or code block have global scope. They are accessible from anywhere in your code.

let globalScopeExample = 10;

function dogsAge() {
  console.log(globalScopeExample); // accessible within function
}

console.log(globalScopeExample); // accessible outside the function

//* Function (local scope)
//! Functions create their own scope, which means variables declared inside a function are typically not accessible outside that function.

function myDog() {
  let dogsAge = 3; // variable with local scope
  console.log(dogsAge);
}

myDog(); // calling the function
console.log(dogsAge);

//* Block
//!  Variables declared with let and const also have block scope, which means they are only accessible within the nearest enclosing code block.

function run() {
  if (true) {
    let blockScope = "I'm a block scope";
    console.log(blockScope); // accessible inside the block
  }
}
run();

console.log(blockScope); // error: blockScope is not defined

//* Closures

//! In JavaScript, closure provides access to the outer scope of a function from inside the inner function, even after the outer function has closed.

function dogNeeds() {
  let needs = ["food", "water", "toys"];
  return function () {
    return needs;
  };
}

const getNeeds = dogNeeds();

console.log(getNeeds());

//! Even though dogNeeds is done running, getNeeds still has access to the needs because of its closure.
//! Closures in JavaScript are like magical secret pockets in functions that can remember things even after the function is done. They're super helpful for saving and reusing values in your code.

//* Hoisting

//! Hoisting is the process by which JavaScript moves variable and function declarations to the top of their containing scope during the compilation phase.

console.log(a); // undefined
var a = 5;

//! In this example, even though we try to log the value of a before it's declared and initialized, we don't get an error. Instead, we see undefined. This is because the declaration of
//! a is hoisted to the top of the current scope, but the assignment (= 5) remains in place.

var a; // declaration is hoisted

console.log(t); // undefined

a = 5; // initialization

//! let and const are also hoisted, but not initialized (you can't access their value) until they are reached in the code

console.log(t);
let t = 25;

//! An anonymous function with an "arrow-syntax"
