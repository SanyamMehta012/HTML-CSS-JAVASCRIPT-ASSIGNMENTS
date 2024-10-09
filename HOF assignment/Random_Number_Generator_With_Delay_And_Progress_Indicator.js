// QUESTION.NO-02  The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a  variable so can be modified. The program displays a message every second indicating the time remaining until the random number is generated and then outputs the generated number.

// Delay in milliseconds
let delay = 3000; // 3 seconds

// Function to generate a random number
function generateRandomNumber() {
    return Math.floor(Math.random() * 100); // Random number between 0 and 99
}

// Countdown function
function startCountdown(seconds) {
    const interval = setInterval(() => {
        console.log(`Time remaining: ${seconds} seconds`);
        seconds--;

        if (seconds < 0) {
            clearInterval(interval);
            const randomNumber = generateRandomNumber();
            console.log(`Generated random number: ${randomNumber}`);
        }
    }, 1000);
}
// Start the countdown and the random number generation
startCountdown(delay / 1000); // Convert milliseconds to seconds
setTimeout(() => {
    // This timeout is only for demonstration; countdown will handle the random number generation.
}, delay);