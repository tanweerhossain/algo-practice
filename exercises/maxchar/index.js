// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/** Solution 1: O(n) */
function maxChar(str) {
  const charMap = {};

  for (const char of str) {
    charMap[char] = (charMap[char] === undefined)
      ? 1
      : charMap[char] + 1;
  }
  
  let maxChar, max = 0;
  for (const char in charMap) {
    const occurance = charMap[char];
    [max, maxChar] = occurance > max
      ? [occurance, char]
      : [max, maxChar];
  }

  return maxChar;
}

module.exports = maxChar;
