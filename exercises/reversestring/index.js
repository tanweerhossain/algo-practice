// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// @** Solution 1: O(n) **
// function reverse(str) {
//     return str
//         .split('')
//         .reverse()
//         .join('');
// }

// @** Solution 2: O(n) **
// function reverse(str) {
//   let reversedString = '';

//   for (const character of str) {
//     reversedString = character + reversedString;
//   }
//   return reversedString;
// }


// @** Solution 3: O(n) **
function reverse(str) {
  return str
    .split('')
    .reduce((prev, current) => current + prev, '');
}

module.exports = reverse;
