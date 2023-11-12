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

//* Methods

//* Callbacks
//! Function passed as an argument to another function
//! A callback in JavaScript is like giving instructions to someone and telling them, "Hey, when you're done with what I asked, call me back, and I'll tell you what to do next."
//! Imagine you're at a restaurant, and you order your favorite pizza. The chef starts making the pizza, but you don't want to wait around the kitchen. So, you give the chef your phone number and say, "When the pizza is ready, call me, and I'll come to pick it up."

//! In this scenario:
//! You place an order (like a function).
//! The chef starts making the pizza (like a time-consuming task).
//! You don't wait around; you go about your business (like asynchronous code).
//! When the pizza is ready, the chef calls you back (like a callback).
//! In JavaScript, callbacks are often used for tasks that might take some time to complete, like reading a file, making an HTTP request, or waiting for user input.

//! Code Example:

//! Let's use a simple example of reading a file asynchronously and using a callback to handle the file's contents when it's ready.

// Simulate reading a file asynchronously
function readFileAsync(callback) {
  setTimeout(function () {
    const fileContent = "This is the content of the file.";
    callback(fileContent); // Call the callback with the file content
  }, 2000); // Simulate a 2-second delay (asynchronous task)
}

// Define a callback function to handle the file content
function processFileContent(content) {
  console.log("File content:", content);
}

// Use the readFileAsync function with the callback
readFileAsync(processFileContent);

console.log("Reading the file..."); // This message appears first

function tryMe(param3, param4) {
  console.log(`${param3} and ${param4}`);
}

function callbackTester(callback, param1, param2) {
  // You call callbackTester with 3 arguments: a function and 2 strings
  // callbackTest calls the first argument with the rest 2 as arguments to the first one.
  callback(param1, param2);
}

callbackTester(tryMe, "hello", "goodbye"); // Notice how the funciton is passed as an argument. If you call the function, that is tryMe(), the return value of that call will be sent as an argument, which in this case is void.
