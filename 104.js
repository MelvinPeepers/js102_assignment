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

// Create an object called 'dog'
const dog = {
  breed: "Labrador Retriever",
  size: "medium",
  start: function () {
    return `A ${this.breed} which is a ${this.size} size dog, is the perfect for my apartment`;
  },
};

// Call the 'start' method of the 'dog' object
dog.start();

//* Arguments

//! The arguments keyword refers to an array-like object available within all functions. It holds all the parameters passed to the function, regardless
//! of the number of parameters defined in the function's signature.

// Define a function that takes two parameters
function displayArguments(arg1, arg2) {
  // The 'arguments' keyword holds all passed arguments
  console.log(arguments);

  // Access individual arguments using array-like indexing
  console.log("First argument:", arguments[0]);
  console.log("Second argument:", arguments[1]);
}

// Call the function with different arguments
displayArguments("dog", "cat");
displayArguments(1, true, "moose");

//* New

//! The new keyword is used to create instances of a class or function.
