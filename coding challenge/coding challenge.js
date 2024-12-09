//  Write a function called "addNumbers" that takes two numbers as arguments and returns their sum. Call the function before it is declared to demonstrate hoisting.
console.log(addNumbers(45, 67)); // Calling the function before its declaration

function addNumbers(num1, num2) {
    return num1 + num2; // Returning the sum of num1 and num2
}

// Write a function called "multiplyNumbers" that takes two numbers as arguments and returns their product.Use function expressions to define the function and call the function before it is declared to demonstrate hoisting.

// Function expression
const multiplyNumbers = function(num1, num2) {
    return num1 * num2; // Returning the product of num1 and num2
};

// Now calling the function after its declaration
console.log(multiplyNumbers(5, 10)); // output: 50

// Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside the function using the var keyword and log its value to the console before it is assigned a value to demonstrate variable hoisting

function addNumbers(num1, num2) {
    console.log(myVar); // This will log 'undefined' due to hoisting
    var myVar = num1 + num2; // Variable assignment
    return myVar; // Returning the sum
}

// Calling the function
console.log(addNumbers(5, 10)); // output: 15

// Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign them values and log their values to the console before and after they are declared to demonstrate variable hoisting.

{
    console.log(letVariable); // ReferenceError: Cannot access 'letVariable' before initialization
    console.log(varVariable); // undefined
    console.log(constVariable); // ReferenceError: Cannot access 'constVariable' before initialization
  
    let letVariable = 10;
    var varVariable = 20;
    const constVariable = 30;
  
    console.log(letVariable); // 10
    console.log(varVariable); // 20
    console.log(constVariable); // 30
  }

//   Declare a variable using let inside a block scope and attempt to log its value to the console before it is assigned a value to demonstrate the temporal dead zone.

{
    // Attempting to log the variable before its declaration
    // console.log(myLetVariable); // Uncommenting this will throw a ReferenceError

    let myLetVariable = 'I am a let variable'; // Variable assignment

    // Logging the value after declaration
    console.log(myLetVariable); // output: - 'I am a let variable'
}