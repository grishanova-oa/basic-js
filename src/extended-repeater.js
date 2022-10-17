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
  let arr = [str];
  let newString = [];
  let newArr = [];
  let {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|' } = options;
  if (addition === null) {
    addition = 'null';
  }


  for (let i = 0; i < repeatTimes; i++) {
    for (let j = 0; j < additionRepeatTimes; j++) {
      newString.push(addition);
      if (j == additionRepeatTimes - 1) {
        newArr.push(arr[0] + newString.join(additionSeparator));
        newString = [];
      }
    }
  }
  return newArr.join(separator);
}


module.exports = {
  repeater
};
