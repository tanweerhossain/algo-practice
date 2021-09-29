// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

/** Solution 1: O(n) */
// function pyramid(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(`${Array(n - i).fill(' ').join('')}${Array(2*i-1).fill('#').join('')}${Array(n - i).fill(' ').join('')}`)
//   }
// }


/** Solution 2: O(n) */
function pyramid(n, k = 0) {
  if (!n) return;
  
  pyramid(n - 1, k||n);

  console.log(`${printChar(' ', (k||n) - n)}${printChar('#', 2*n-1)}${printChar(' ', (k||n) - n)}`);
}
function printChar(char, times) {
  if (!times) return '';

  return `${char}${printChar(char, times - 1)}`
}

module.exports = pyramid;
