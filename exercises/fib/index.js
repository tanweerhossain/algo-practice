// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

/** Solution 1: O(2^n) */
// function fib(n) {
//   if ( (n === 0) || (n === 1) ) return n;

//   return fib(n - 1) + fib(n-2);
// }

/** Solution 2: O(n) */
// function fib(n) {
//   if ( (n === 0) || (n === 1) ) return n;

//   let resultSet = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     resultSet.push(resultSet[0] + resultSet[1]);
//     resultSet.shift(1);
//   }
  
//   return resultSet[1];
// }

/** Solution 3: O(n) using Memoization */
function slowFib(n) {
  if ( (n === 0) || (n === 1) ) return n;

  return fib(n - 1) + fib(n-2);
}

function memoize(fn) {
  const cache = {};

  return function(...args) {
    if (cache[args]) return cache[args];

    const result = fn.apply(this, args);

    cache[args] = result;

    return result;
  }
}
const fib = memoize(slowFib);


module.exports = fib;
