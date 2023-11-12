//* Callback

//! A callback is a function that is passed as an argument to another function and
//! is executed after the completion of some asynchronous operation or at a specified time.

// Function that takes a callback as an argument
function greet(name, callback) {
  console.log("Hello, " + name + "!");
  // Invoke the callback
  callback();
}

// Callback function
function sayGoodbye() {
  console.log("Goodbye!");
}

// Call the function with the callback
greet("John", sayGoodbye);
