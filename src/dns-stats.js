const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {};
  for (const domain of domains) {
    let domainArray = domain.split('.').reverse();
    let segment = '';
    for (const element of domainArray) {
      segment = segment + '.' + element;
      if (result.hasOwnProperty(segment)) {
        result[segment]++;
      }
      else {
        result[segment] = 1;
      }
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
