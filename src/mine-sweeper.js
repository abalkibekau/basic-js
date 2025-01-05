const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let rows = matrix.length;
  let columns = matrix[0].length;
  let result = Array(rows).fill().map(() => Array(columns).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j]) {
        let top = i > 0;
        let bottom = i < rows - 1;
        let left = j > 0;
        let right = j < columns - 1;
        if (top) {
          result[i-1][j]++;
          if (left) {
            result[i-1][j-1]++;
          }
          if (right) {
            result[i-1][j+1]++;
          }
        }
        if (bottom) {
          result[i+1][j]++;
          if (left) {
            result[i+1][j-1]++;
          }
          if (right) {
            result[i+1][j+1]++;
          }
        }
        if (left) {
          result[i][j-1]++;
        }
        if (right) {
          result[i][j+1]++;
        }
      }
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
