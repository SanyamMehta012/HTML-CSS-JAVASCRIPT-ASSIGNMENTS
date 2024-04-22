
//  QUESTION.NO-15 Create a JavaScript program that generates a random number between 1 and 100 when the program starts. Use a self-invoking arrow function to generate the random number. This program can be used as a component in various games or applications that require a random number generator

// ANSWER: -
const randomGenerator = (() => {
    const min = 1;
    const max = 100;
    return Math.floor(Math.random() * (max - min + 1)) + min;
})();

console.log(`Random number: ${randomGenerator}`);
