// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/** Solution 1: O(n) **/
function reverseInt(n) {
    return Math.sign(n) * parseInt(
        Math.abs(n)
            .toString()
            .split('')
            .reverse()
            .join('')
        );
}

module.exports = reverseInt;
