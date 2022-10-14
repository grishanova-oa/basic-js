const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr1 = s1.split('');
   let arr2 = s2.split('');
 
   const obj1 = {};
   const obj2 = {};
 
   arr1.forEach((item) => {
     if (!obj1[item]) {
       obj1[item] = 1;
     } else {
       obj1[item] += 1;
     }
   });
 
   arr2.forEach((item) => {
     if (!obj2[item]) {
       obj2[item] = 1;
     } else {
       obj2[item] += 1;
     }
   })
   
   let result = 0;
   Object.keys(obj1).forEach((item) => {
     if (obj1[item] && obj2[item]) {
       result += Math.min(obj1[item], obj2[item]);
     }
   })
   return result;
  }

module.exports = {
  getCommonCharacterCount
};
