// QUESTION.NO-4 A teacher wants to find out the highest marks scored By a student in a class of five students. The teacher enters the marks of all five students in an array called "marks". Write a program that iterates through the array and finds the highest marks scored By any student in the class. The highest marks must then Be displayed to the teacher using the console. Make sure you use the ternary operator to find the student with the highest marks.

// ANSWER: - 
function findHighestMarks(marks) {
    let highestMarks = marks.reduce((max, current) => max > current ? max : current);
    console.log("The highest marks scored by any student is: " + highestMarks);
}


const marks = [85, 92, 78, 95, 88];
findHighestMarks(marks);
