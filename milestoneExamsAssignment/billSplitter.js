//  QUESTION.NO-12 A restaurant wants to calculate the total bill for a table based on the cost of each dish and the number of people sharing it. They require a function that takes in the cost of each dish and the number of people sharing it and returns an object that contains the total bill and the bill to be paid by each person in the group.

// ANSWER: - 
function calculateBill(dishPrices, numPeople) {
    // Calculate the total cost of all dishes
    const totalCost = dishPrices.reduce((sum, price) => sum + price, 0);

    // Calculate the cost per person
    const costPerPerson = totalCost / numPeople;

    // Create an object to store the results
    const billInfo = {
        totalBill: totalCost,
        billPerPerson: costPerPerson.toFixed(2), // Rounded to 2 decimal places
    };

    return billInfo;
}

const dishPrices = [1200, 800, 600, 450]; // Cost of each dish
const numPeople = 4; // Number of people sharing the bill

const result1 = calculateBill(dishPrices, numPeople);
console.log(`Total bill: Rs. ${result1.totalBill}`);
console.log(`Bill per person: Rs. ${result1.billPerPerson}`);
