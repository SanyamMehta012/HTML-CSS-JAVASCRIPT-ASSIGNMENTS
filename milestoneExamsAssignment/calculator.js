// QUESTION.NO - Create a javascript program that takes in two num#ers and a string operator. Make use of a switch statement to perform the operation on the two numbers The calculator function should"
// 1) Take in two num#ers, num1 and num2, and a string representing a mathematical operator, operator.     
// 2) Use a switch statement to determine which operation to perform based on the value of the operatorP
// 3) If the operator is one of the four valid operators (+, -, *, /), perform the corresponding mathematical operation and store the result in a variable called result  
// 4) If the operator is not one of the valid operators, log "Invalid operator" to the console

// ANSWER: - 1)

let num1 = 20;
let num2 = 20;
let str = "+"; // expected output: 40
// let str = "-"; // expected output: 0
// let str = "*"; // expected output: 400
// let str = "/"; // expected output: 1
// let str = "%"; // expected output: 0
// let str = "#"; // expected output: Invalid Operator


let result = calculate(num1,num2,str);
console.log("Result:",result);

function calculate(num1,num2,str) {
    switch (str) {
        case "+":
            return num1+num2;
        case "-":
            return num1-num2;
        case "*":
            return num1*num2;
        case "/":
            return num1/num2;
        case "%":
            return num1%num2;
        default:
           return " Invalid Operator";
    }
}