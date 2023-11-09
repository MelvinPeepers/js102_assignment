//* Assignment 103

//* Anonymous Functions
//! a function without a name

const someFunc = function () {
  // stuff
};
someFunc; // calling function

setTimeout(function () {
  // when used as callbacks,
  // anonymous functions can be
  // directly passed as an argument
}, 5000);

//* Name Functions
//! A Function with a name

const someFunct = function funcName() {
  funcName(); // recursive call but funcName() is only accessible inside the function.
};
someFunct();

setTimeout(someFunct, 5000);

//* Hoisting with Named Functions

//* Arrow Functions (basics)
