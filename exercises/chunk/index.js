// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/** Solution 1: O(n) */
// function chunk(array, size) {
//   let listOfSubArrays = [];
//   let subArray = [];
//   for (const element of array) {
//     if (subArray.length === size) {
//       listOfSubArrays.push(subArray);
//       subArray = [];
//     }
    
//     subArray.push(element);
//   }

//   if (subArray.length > 0) {
//     listOfSubArrays.push(subArray);
//   }
//   return listOfSubArrays;
// }


/** Solution 2: O(n) */
function chunk(array, size) {
  let listOfSubArrays = [];

  for (let i = 0; i < array.length; i = i + size) {
    listOfSubArrays.push(array.slice(i, i + size));   
  }

  return listOfSubArrays;
}

module.exports = chunk;
