// QUESTION.NO- 3 Write a JavaScript program that takes in two strings representing colors and uses a switch statement to determine the resulting color when the two colors are mixed. The program should print the resulting color Based on the following criteria"
// 1) If color1 is "red" and color2 is "blue" or vice versa, print "purple"
// 2) If color1 is "red" and color2 is "yellow" or vice versa, print "orange"
// 3) If color1 is "blue" and `color2" is "yellow" or vice versa, print "green"
// 4) If any other combination of colors is input, the program should print "Invalid color combination"


// ANSWER: - 

function mixColors(color1, color2) {
    // Convert the colors to lowercase for case-insensitive matching
    color1 = color1.toLowerCase();
    color2 = color2.toLowerCase();
  
    switch (true) {
      case (color1 === "red" && color2 === "blue") || (color1 === "blue" && color2 === "red"):
        return "purple";
      case (color1 === "red" && color2 === "yellow") || (color1 === "yellow" && color2 === "red"):
        return "orange";
      case (color1 === "blue" && color2 === "yellow") || (color1 === "yellow" && color2 === "blue"):
        return "green";
      default:
        return "Invalid color combination";
    }
  }
  
 
//   console.log(mixColors("red", "blue")); // Output: purple
//   console.log(mixColors("blue", "yellow")); // Output: green
  console.log(mixColors("red","yellow")); //Output: orange
//   console.log(mixColors("red", "green")); // Output: Invalid color combination
