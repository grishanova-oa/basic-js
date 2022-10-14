const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let exeptionIndexArr = [];
  let newArr = [];
  let elem = 0;     // индекс  из массива newArr

  arr.forEach((item, index) => {
     if( item !== -1 ) {
        newArr.push(item);
     }
     if (item === -1 ) {
        exeptionIndexArr.push(index);
     }
  })
  newArr.sort(function(a, b) {
     return a - b;
   });


  const result = arr.map((item, index) => {
     if ( exeptionIndexArr.includes(index)){
        return -1;
     }
     else {
        let newElem = newArr[elem];
        elem ++;
         return newElem;
        
     }
  })
  return result;
}

module.exports = {
  sortByHeight
};
