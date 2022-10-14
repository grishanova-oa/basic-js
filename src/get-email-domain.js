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
  let arr = String(email).split('');
  const symbolIndex = arr.lastIndexOf('@');
  let res1 = arr.slice(symbolIndex + 1);
  let result = res1.join('');
  
  return result;
}

module.exports = {
  getEmailDomain
};
