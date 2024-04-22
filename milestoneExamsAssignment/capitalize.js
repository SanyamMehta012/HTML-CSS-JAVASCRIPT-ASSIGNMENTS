// QUESTION.NO-5 You are Building a form where users can enter their names. You want to make sure that the first letter of the name is always capitalized, even if the user forgets to do so. Write a program that takes in the user's name as a string and uses the ternary operator to check if the first letter is lowercase. If it is, the program capitalizes it and returns the modified string. Otherwise, it returns the original string without any changes

// ANSWER: -

function capitalizeFirstLetter(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}


const userName1 = "sanyam mehta";
const userName2 = "devid warner";

const modifiedUserName1 = userName1.charAt(0).toLowerCase() === userName1.charAt(0) ? capitalizeFirstLetter(userName1) : userName1;
const modifiedUserName2 = userName2.charAt(0).toLowerCase() === userName2.charAt(0) ? capitalizeFirstLetter(userName2) : userName2;

console.log(modifiedUserName1); // sanyam mehta
console.log(modifiedUserName2); // devid warner
