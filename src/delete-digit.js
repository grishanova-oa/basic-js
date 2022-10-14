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
function deleteDigit(num) {
  let arr = String(num).split('').map(Number);
 let temp = [];
 
 arr.forEach((item, index) => {
      let newArr = [...arr];
      newArr.splice(index, 1);
      temp.push(newArr.join(''));
    
 });
 return Math.max(...temp);
}

module.exports = {
  deleteDigit
};
