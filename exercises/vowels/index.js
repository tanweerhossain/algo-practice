// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

/** Solution 1: O(n) */
// function vowels(str) {
//     let vowel = {};
//     vowel.a = vowel.e = vowel.o = vowel.i = vowel.u = true;
//     let count = 0;

//     for (const char of str.toLowerCase().split('')) {
//         count = vowel[char] ? count + 1 : count;
//     }
//     return count;
// }

/** Solution 2: O(n) */
function vowels(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}

module.exports = vowels;
