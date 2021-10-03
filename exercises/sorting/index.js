// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(array) {
  // console.log(`Step ${0}: [${array.toString()}]`);
  for (let j = 0; j < array.length - 1; j++) {
    for (let i = 0; i < array.length - j - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }
    // console.log(`Step ${j+1}: [${array.toString()}]`);
  }
  return array;
}

function selectionSort(array) {
  // console.log(`Step ${0}: [${array.toString()}]`);
  for (let j = 0; j < array.length - 1; j++) {
    let minIndex = j + 1;
    for (let i = minIndex; i < array.length ; i++) {
      minIndex = (array[minIndex] > array[i]) ? i : minIndex;
    }
    if (array[j] > array[minIndex]) {
      [array[j], array[minIndex]] = [array[minIndex], array[j]];
    }
    // console.log(`Step ${j+1}: [${array.toString()}]`);
  }
  return array;
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const midPoint = Math.floor(arr.length/2);

  let leftSubArray = arr.slice(0, midPoint);
  let rightSubArray = arr.slice(midPoint, arr.length);

  // console.log('Before -', `[${leftSubArray.toString()}]`, `[${rightSubArray.toString()}]`);
  leftSubArray = mergeSort(leftSubArray);
  rightSubArray = mergeSort(rightSubArray);
  // console.log('After -', `[${leftSubArray.toString()}]`, `[${rightSubArray.toString()}]`);

  return merge(leftSubArray, rightSubArray);
}

function merge(left, right) {
  let leftPtr = 0;
  let rightPtr = 0;
  const mergedList = [];

  while(leftPtr < left.length || rightPtr < right.length) {
    if (leftPtr < left.length && rightPtr < right.length) {
      mergedList.push(
        (left[leftPtr] < right[rightPtr])
          ? left[leftPtr++]
          : right[rightPtr++]
      );
    } else if (leftPtr < left.length) {
      mergedList.push(left[leftPtr++]);
    } else if (rightPtr < right.length) {
      mergedList.push(right[rightPtr++]);
    }
  }

  return mergedList;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
