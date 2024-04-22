//  QUESTION.NO-14 A retail store is offering a discount on its products and wants to calculate the percentage of the discount to show customers how much they can save. Given the original price and the discounted price of a product, implement an arrow function to calculate the percentage of the discount rounded off to two decimal places. This function could be useful for the store's marketing team to create promotions and offers that attract customers

// ANSWER: - 
const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    // Calculate the discount amount
    const discountAmount = originalPrice - discountedPrice;

    // Calculate the percentage discount
    const percentageDiscount = (discountAmount / originalPrice) * 100;

    // Round off to two decimal places
    const roundedDiscount = percentageDiscount.toFixed(2);

    return roundedDiscount;
};

const originalPrice = 100; // Replace with the actual original price
const discountedPrice = 80; // Replace with the actual discounted price

const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
console.log(`Discount percentage: ${discountPercentage}%`);
