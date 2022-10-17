const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
 function getMatrixElementsSum( matrix ) {
  let current = 0;

  matrix.forEach((item, index) => {
     if (index === 0) {
        let firstIndex = item.reduce((a, b) => a + b, 0);
        current += firstIndex;
     } else {
        item.forEach((item2, index2) => {
           if ( matrix[index - 1][index2] !== 0){
              current += item2;
           } 
        })
     }

  })
  return current;
}

module.exports = {
  getMatrixElementsSum
};
