// QUESTION.NO-16 A banking application needs to manage customer accounts and transactions. The user detail is stored in an object with a keys name and balance. Write functions using object methods to update a customer's account balance based on a deposit or withdrawal.

// ANSWER: - 
// Create a customer account object
const customerAccount = {
    name: 'John Doe',
    balance: 1000, // Initial balance
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited Rs. ${amount}. New balance: Rs. ${this.balance}`);
        } else {
            console.log('Invalid deposit amount. Please enter a positive value.');
        }
    },
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn Rs. ${amount}. New balance: Rs. ${this.balance}`);
        } else {
            console.log('Insufficient funds or invalid withdrawal amount.');
        }
    },
};

customerAccount.deposit(500); // Deposit Rs. 500
customerAccount.withdraw(200); // Withdraw Rs. 200
customerAccount.withdraw(1500); // Insufficient funds
