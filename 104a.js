// #! want the greet to say Goodbye John

// function greet(name, callback) {
//   console.log("Hello, " + name + "!");
//   // Invoke the callback
//   callback(name);
// }

// // Callback function
// function sayGoodbye(name) {
//   console.log("Goodbye! " + name);
// }

// // Call the function with the callback
// greet("John", sayGoodbye);

// Function that takes a callback as an argument
function greet(name, callback) {
  console.log("Hello, " + name + "!");
  // Invoke the callback
  callback(name);
}

// Callback function
function sayGoodbye(name) {
  console.log("Goodbye " + name + "!");
}

// Call the function with the callback
greet("John", sayGoodbye);
