const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let addition = repeat(options.addition, options.additionRepeatTimes, options.additionSeparator != undefined ? options.additionSeparator : '|');
  return repeat(str + addition, options.repeatTimes, options.separator != undefined ? options.separator : '+');
}

function repeat(str, times, separator) {
  if (str === undefined) {
    return '';
  }
  let value = String(str);
  if (value == '') {
    return '';
  }
  if (!times) {
    return value;
  }
  let arr = Array(times);
  arr.fill(value);
  return arr.join(separator);
}

module.exports = {
  repeater
};
