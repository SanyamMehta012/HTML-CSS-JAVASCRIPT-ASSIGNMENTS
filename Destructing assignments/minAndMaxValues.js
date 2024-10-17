
let inputArray = [5, 2, 7, 1, 9];
let result = findMaxMin(inputArray);

function findMaxMin(arr) {
    // Use the spread operator to pass the array elements to Math.max and Math.min
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    
    // Return an object with max and min properties
    return { max, min };
  }
  
  console.log(result); // Output: { max: 9, min: 1 }
  