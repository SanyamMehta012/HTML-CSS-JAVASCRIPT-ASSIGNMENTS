//  QUESTION.NO-11 A car rental company needs to calculate the cost of a rental based on the number of days rented and the type of car. They require a function that takes in the number of days rented and car type and returns the rental cost. The total cost would be the rental cost multiplied by the number of days rented.


// The rental costs are
// 1. Economy = Rs. 4000 /- per day
// 2. Midsize = Rs. 10,000 /- per day
// 3. Luxury = Rs. 20,000 /- per day

// ANSWER: -
function calculateRentalCost(carType, daysRented) {
    let rentalCost;

    switch (carType.toLowerCase()) {
        case 'economy':
            rentalCost = 4000;
            break;
        case 'midsize':
            rentalCost = 10000;
            break;
        case 'luxury':
            rentalCost = 20000;
            break;
        default:
            console.log('Invalid car type. Please choose from: Economy, Midsize, or Luxury.');
            return null;
    }

    const totalCost = rentalCost * daysRented;
    return totalCost;
}

const carType = 'Economy'; // Replace with the desired car type (Economy, Midsize, or Luxury)
const daysRented = 5; // Replace with the actual number of days rented

const totalRentalCost = calculateRentalCost(carType, daysRented);
if (totalRentalCost !== null) {
    console.log(`Total rental cost for ${daysRented} days (${carType}): Rs. ${totalRentalCost}`);
}

