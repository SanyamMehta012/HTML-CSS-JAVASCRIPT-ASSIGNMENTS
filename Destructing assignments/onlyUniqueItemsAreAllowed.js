
const inputArray = [1, 2, 2, 3, 4, 4, 5];
const result = removeDuplicates(inputArray);

function removeDuplicates(arr) {
    // Create a Set from the array, which automatically removes duplicates
    const uniqueSet = new Set(arr);
    
    // Convert the Set back to an array and return it
    return Array.from(uniqueSet);
}

console.log(result);  // Output: [1, 2, 3, 4, 5]
