// QUESTION.NO-01 The problem is to create a program that uses the setTimeout() function to reverse a given string after a delayof 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of2 seconds before reversing the string. The reversed string should then be printed as output.


// Input string
let input = "Hello, world!";

// Function to reverse the string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Set a timeout to reverse the string after 2 seconds
setTimeout(() => {
    let reversed = reverseString(input);
    console.log(reversed);
}, 2000);