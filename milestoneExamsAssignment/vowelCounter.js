// QUESTION.NO-6 We want to count the num#er of vowels in a person's name. Given a name as input, the program should iterate through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should be counted


// ANSWER: -
function countVowels(name) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;

    for (let i = 0; i < name.length; i++) {
        if (vowels.includes(name[i].toLowerCase())) {
            vowelCount++;
        }
    }

    return vowelCount;
}


const name = "sanyam mehta";
const numVowels = countVowels(name);
console.log("Number of vowels in the name:", numVowels); // Output: 3
