//  QUESTION.NO-13 A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on the unit price and quantity of each item

// ANSWER: -
const calculateTotalCost = (cart) => {
    // Calculate the total cost using reduce
    const totalCost = cart.reduce((acc, item) => {
        return acc + item.unitPrice * item.quantity;
    }, 0);

    return totalCost;
};

const customerCart = [
    { unitPrice: 10, quantity: 3 }, // Item 1
    { unitPrice: 15, quantity: 2 }, // Item 2
    // Add more items as needed
];

const totalCost = calculateTotalCost(customerCart);
console.log(`Total cost of items: Rs. ${totalCost}`);
