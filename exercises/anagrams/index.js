// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/** Solution 1: O(n) */
// function anagrams(stringA, stringB) {
//   const charMapA = {}, charMapB = {};

//   stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
//   stringB = stringB.replace(/[^\w]/g, '').toLowerCase();

//   for (const char of stringA.split('')) {
//     charMapA[char] = (charMapA[char] === undefined)
//       ? 1
//       : charMapA[char] + 1;
//   }

//   for (const char of stringB.split('')) {
//     charMapB[char] = (charMapB[char] === undefined)
//       ? 1
//       : charMapB[char] + 1;
//   }

//   let isAnagram = true;

//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//     isAnagram = false;
//   } else {
//     for (const char in charMapA) {
//       if (charMapA[char] !== charMapB[char]) {
//         isAnagram = false;
//         break;
//       }
//     }
//   }

//   return isAnagram;
// }

/** Solution 2: O(nlogn) */
function anagrams(stringA, stringB) {
  stringA = stringA
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
  stringB = stringB
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');

  return stringB === stringA;
}

module.exports = anagrams;
