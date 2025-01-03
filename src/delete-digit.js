const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numbers = [...n.toString()];
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] < numbers[i+1]) {
      return arrayToNumber(numbers.toSpliced(i, 1));
    }
  }
  numbers.pop();
  return arrayToNumber(numbers);
}

function arrayToNumber(arr) {
  return Number(arr.join(''));
}

module.exports = {
  deleteDigit
};
