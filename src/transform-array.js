const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  const workArray = [...arr];
  const newArr = [];

  if (workArray[0] === '--discard-prev' || workArray[0] === '--double-prev') {
    workArray.shift();
  }
  const lastElement = workArray[workArray.length - 1]
  if (lastElement === '--double-next' || lastElement === '--discard-next') {
    workArray.pop();
  }

  workArray.forEach((element, index) => {
  
    switch (element) {
      case '--double-prev':
        newArr.push(workArray[index - 1]);
        break;
      case '--discard-prev':
        newArr.pop();
        break;
      case '--double-next':
        newArr.push(workArray[index + 1]);
        break;
      case '--discard-next':
        newArr.push(undefined);
        delete workArray[index + 1];
        break;
      default:
        newArr.push(element);

    }
  })

  return newArr.filter((item => item !== undefined));
}

module.exports = {
  transform
};
