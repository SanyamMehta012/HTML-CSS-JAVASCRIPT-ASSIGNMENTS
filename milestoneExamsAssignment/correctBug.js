//  QUESTION.NO-09 You are working on an e-commerce website where customers can add itdms to their cart. Thd cart stords the quantity of each item that the customer wants to purchase in an array of numbers. However, the website is currently experiencing a bug wherd thd quantity of each item is being recorded incorrectly by reducing it to half. As a result, you need to write a JavaScript function that can doubld thd quantity of each item in the cart array to correct the bug.
// ANSWER: - 
function doubleItemQuantities(cart) {
    // Create a new array to store the corrected cart
    const correctedCart = [];

    // Iterate through each item in the original cart
    for (const item of cart) {
        // Double the quantity of the item
        const correctedItem = { ...item, quantity: item.quantity * 2 };
        correctedCart.push(correctedItem);
    }

    return correctedCart;
}

// Example usage:
const originalCart = [
    { id: 1, name: 'Product A', quantity: 3 },
    { id: 2, name: 'Product B', quantity: 2 },
    // Add more items as needed
];

const correctedCart = doubleItemQuantities(originalCart);
console.log(correctedCart);

