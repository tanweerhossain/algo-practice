// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const _2DArray = [];

  for (let i = 0; i < n; i++) _2DArray[i] = [];

  let startRow = 0;
  let startColumn = 0;
  let endRow = n - 1;
  let endColumn = n - 1;
  let counter = 1;

  while (counter < (n * n + 1)) {
    // Top row creation from L -> R
    for (let i = startColumn; i <= endColumn; i++) _2DArray[startRow][i] = counter++;
    startRow++;

    // Right column creation from T -> D
    for (let i = startRow; i <= endRow; i++) _2DArray[i][endColumn] = counter++;
    endColumn--;

    // Bottom row creation from L <- R
    for (let i = endColumn; i >= startColumn; i--) _2DArray[endRow][i] = counter++;
    endRow--;

    // Left column creation from T <- D
    for (let i = endRow; i >= startRow; i--) _2DArray[i][startColumn] = counter++;
    startColumn++;
  }


  return _2DArray;
}
module.exports = matrix;
