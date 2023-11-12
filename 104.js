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

//* this

//! The this keyword in JavaScript refers to the context in which a function is executed. Here's a very basic example to demonstrate the use of this:

// Object with a method
let myObject = {
  value: 42,
  // getValue is the method
  getValue: function () {
    // this referrs to the object itself
    console.log(this.value);
  },
};

// Calling the method using the object
myObject.getValue(); // Logs: 42

// Creating a standalone function that uses 'this'
function standaloneFunction() {
  console.log(this); // 'this' refers to the global object ('window' in a browser environment)
}

// Calling the standalone function
standaloneFunction();
