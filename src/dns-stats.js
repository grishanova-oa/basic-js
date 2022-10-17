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
  const newArr = [];

   domains.forEach((item) => {
     let breakAdress = item.split('.').reverse();

     let pointAdress = breakAdress.map((point) => {
        return `.${point}`;
     });

     let newPointAdress = pointAdress.map((_, index ) => {
        const arr = [...pointAdress];
        return arr.splice(0, index + 1).join('');
     })
     newArr.push(...newPointAdress);
   })

   newArr.forEach((item, index) => {
     if (!result[item]) {
        result[item] = 1;
     } else {
        result[item] ++;
     } 
     
   })
return result;
  
}

module.exports = {
  getDNSStats
};
