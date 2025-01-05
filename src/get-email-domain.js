const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  if (email == null) return '';
  let arr = email.split('@');
  return arr.length < 2 ? '' : arr[arr.length - 1];
}

module.exports = {
  getEmailDomain
};
