
let x = 5;
let y = 10;
let swappedValues = swap(x, y);
  

function swap(x, y) {
    // Destructure and swap the values
    [x, y] = [y, x];
    
    // Return the swapped values as an array
    return [x, y];
  }
  
  console.log(swappedValues); // Output: [10, 5]
  