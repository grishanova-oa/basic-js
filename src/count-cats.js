/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^', 0, 1, '^^', 0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 function countCats(matrix) {
  let catsCount = 0;

  matrix.forEach(arr => {
    arr.forEach(element => {
      if (element === '^^') {
        catsCount += 1;
      }
    });
  });

  return catsCount;
}

module.exports = {
  countCats
};
