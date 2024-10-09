// QUESTION.NO-05 Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,  followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters. Print a message indicating if the input matches the conditions or not.

// Function to validate a URL using regex
function validateURL(url) {
    // Regex pattern for matching valid URLs
    const urlPattern = /^(http:\/\/|https:\/\/)[\w\-._~:\/?#[\]@!$&'()*+,;=]+(\.[a-zA-Z]+)+$/;

    if (urlPattern.test(url)) {
        console.log("The URL is valid.");
    } else {
        console.log("The URL is not valid.");
    }
}

// Test the function with different URLs
const testURLs = [
    "http://example.com",
    "https://example.com",
    "http://example.co.in",
    "https://subdomain.example.com",
    "ftp://example.com", // Invalid
    "http://example", // Invalid
    "https://example.com/path/to/resource",
];

testURLs.forEach(url => {
    console.log(`Testing URL: ${url}`);
    validateURL(url);
});
