// QUESTION.NO-06 As a developer, you want to create a program that validates LinkedIn profile URLs to ensure that they are  formatted correctly and contain only valid characters. Valid LinkedIn profile URLs should start with https:// www.linkedin.com/in/ followed by a combination of one or more letters, digits, underscores, or hyphens, and end with a letter or digit. The length of the profile ID should be between 5 and 30 characters. The program should use a regular expression to match valid LinkedIn profile URLs, and should not match URLs  That do not follow this format or contain invalid characters. The program should provide clear output messages indicating whether each input is a valid LinkedIn profile URL or not.

// Function to validate LinkedIn profile URLs
function validateLinkedInURL(url) {
    // Regex pattern for matching valid LinkedIn profile URLs
    const urlPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

    if (urlPattern.test(url)) {
        console.log(`"${url}" is a valid LinkedIn profile URL.`);
    } else {
        console.log(`"${url}" is not a valid LinkedIn profile URL.`);
    }
}

// Test the function with different LinkedIn URLs
const testsURLs = [
    "https://www.linkedin.com/in/sanyam-mehta",
    "https://www.linkedin.com/in/sonuyadav-123",
    "https://www.linkedin.com/in/a",
    "https://www.linkedin.com/in/kunal-123456",
    "https://www.linkedin.com/in/abhishek_123456789012345678901234567890", // Invalid length
    "https://www.linkedin.com/in/jane.doe", // Invalid character
    "https://www.linkedin.com/in/12345", // Valid
    "https://www.linkedin.com/in/valid-profile-id", // Valid
];

testsURLs.forEach(url => {
    validateLinkedInURL(url);
});
