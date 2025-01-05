const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let segments = n.split('-');
  if (segments.length != 6) {
    return false;
  }
  for (const segment of segments) {
    if (!validateSegment(segment)) {
      return false;
    }
  }
  return true;
}

function validateSegment(segment) {
  if (segment.length != 2) {
    return false;
  }
  return isHEX(segment[0]) && isHEX(segment[1]);
}

function isHEX(hex) {
  return '0123456789ABCDEF'.includes(hex);
}
module.exports = {
  isMAC48Address
};
