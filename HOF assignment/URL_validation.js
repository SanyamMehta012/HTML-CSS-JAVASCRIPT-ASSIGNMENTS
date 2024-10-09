// QUESTION.NO-04 Write a program that takes a list of books, including their authors and publication years as input. The program  should then filter out all books that were published before 2010 and create a new array with the remaining books, but with their author names capitalized.

// List of books with authors and publication years
const books = [
    { title: "Five Point Someone", author: "Chetan Bhagat", year: 2004 },
    { title: "The Unproposed Guy", author: "Bhavik Sarkhedi", year: 2020 },
    { title: "Life is What You Make It", author: "Preeti Shenoy", year: 2011 },
    { title: "Family Life", author: "Akhil Sharma", year: 2014 },
    { title: "Narcopolis", author: "Jeet Thayil", year: 2012 },
    { title: "The White Tiger", author: "Aravind Adiga", year: 2008 },
    { title: "Karma Cola", author: "Gita Mehta", year: 1979 }
];

// Filter and capitalize authors
const filteredBooks = books
    .filter(book => book.year >= 2010) // Filter out books published before 2010
    .map(book => ({
        title: book.title,
        author: book.author.toUpperCase(), // Capitalize author name
        year: book.year
    }));

// Display the new array of filtered books
console.log(filteredBooks);

