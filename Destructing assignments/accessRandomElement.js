
let inputArray = [1, 2, 3, 4, 5];
let result = extractElements(inputArray);

function extractElements(arr) {
    // Destructure to get the first and second elements
    const [first, second, ...rest] = arr;
    
    // Get the last element from the rest of the array
    const last = arr[arr.length - 1];
    
    // Return an array with the first, second, and last elements
    return [first, second, last];
  }

  console.log(result); // Output: [1, 2, 5]
  