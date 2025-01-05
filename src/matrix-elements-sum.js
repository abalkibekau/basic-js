const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  let skipColumns = [];
  for (let i = 0; i < matrix.length; i++) {
    let numberOfColumns = matrix[i].length;
    for (let j = 0; j < matrix[i].length; j++) {
      if (skipColumns.includes(j)) {
        continue;
      }
      if (matrix[i][j] > 0) {
        sum += matrix[i][j];
      } else {
        skipColumns.push(j)
      }
      if (skipColumns.length == numberOfColumns) {
        return sum;
      }
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
