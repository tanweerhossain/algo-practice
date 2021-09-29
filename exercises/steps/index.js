// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/** Solution 1: O(n^2) */
// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(`${Array(i).fill('#').join('')}${Array(n - i).fill(' ').join('')}`)
//   }
// }

/** Solution 2: O(n^2) */
function steps(n, k = 0) {
  if (!n) return;
  
  steps(n - 1, k||n);

  console.log(`${printChar('#', n)}${printChar(' ', (k||n) - n)}`);
}
function printChar(char, times) {
  if (!times) return '';

  return `${char}${printChar(char, times - 1)}`
}

module.exports = steps;
