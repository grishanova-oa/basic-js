const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
   let currentLetter;
   let currentCount = 0;
   let result = '';

   arr.forEach((item, index) => {
    if ( arr.length === index + 1 && item !== currentLetter){
       const newRes = currentCount === 1 ? currentLetter : currentCount + currentLetter;
       result += newRes;
       result += item;

       return;
    }
    if ( arr.length === index + 1 && item === currentLetter){
       currentCount ++;
       result += currentCount + currentLetter;

       return;
    }
    if ( !currentLetter ){
       currentLetter = item;
       currentCount ++;

       return;
    }
    if ( item === currentLetter ) {
       currentCount ++;

       return;
    }
    if ( item !== currentLetter ) {
       const newRes = currentCount === 1 ? currentLetter : currentCount + currentLetter;
       result += newRes;
       currentLetter = item;
       currentCount = 1;

       return;
    }
 
 })
   return result;
  
}

module.exports = {
  encodeLine
};
