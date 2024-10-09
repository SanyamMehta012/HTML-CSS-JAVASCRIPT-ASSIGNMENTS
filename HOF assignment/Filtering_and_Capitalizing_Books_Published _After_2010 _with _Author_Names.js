// QUESTION.NO-03  Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should use the map higher-order function to create a new object with the converted prices in Rupees.

// Store with items and their prices in USD
const storeItems = {
    "apple": 1.5,
    "banana": 0.5,
    "orange": 0.75,
    "mango": 1.2,
};

// Exchange rate
const exchangeRate = 80; // 1 USD to 80 INR

// Convert prices to Indian Rupees
const convertedPrices = Object.fromEntries(
    Object.entries(storeItems).map(([item, price]) => [item, price * exchangeRate])
);

// Display the new object with prices in INR
console.log(convertedPrices);
