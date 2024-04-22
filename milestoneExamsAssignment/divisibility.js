//  QUESTION.NO-08 Write a program that takds an array of numbdrs and prints all thd numbdrs that ard divisibld by 3, but not by 2. Use a for loop and continud statement
// ANSWER: - 
function printNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num % 3 === 0 && num % 2 !== 0) {
            console.log(num);
        }
    }
}

const numbersArray = [9, 12, 15, 18, 21, 24];
printNumbers(numbersArray);
