
const inputText = "Hello world hello";
const result = wordCount(inputText);

function wordCount(text) {
    // Split the text into words
    const words = text.split(/\s+/);
    
    // Create an object to hold the word counts
    const wordCountMap = {};
    
    // Count the occurrences of each word
    words.forEach(word => {
        // Convert word to lowercase to ensure case-insensitivity
        word = word.toLowerCase();
        if (wordCountMap[word]) {
            wordCountMap[word] += 1;
        } else {
            wordCountMap[word] = 1;
        }
    });
    
    return wordCountMap;
}

console.log(result);  // Output: { hello: 2, world: 1 }
