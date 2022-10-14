const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.chain.push('(  )');
      return this;
    }
    if (value === null) {
      this.chain.push(value);
      return this;
    }
    this.chain.push(value.toString());

    return this;
  },
  removeLink(position) {
    if (
      typeof position == 'number' &&
      position % 1 == 0 &&
      position > 0 &&
      this.chain.length >= position
    ) {
      this.chain.splice([position - 1], 1);

      return this;
    }
    else {
      this.chain =[]; 
      throw new Error("You can\'t remove incorrect link!")
     }
  },
  reverseChain() {
    this.chain.reverse();

    return this;
  },
  finishChain() {
    let result = '';
    this.chain.forEach((item, index) => {
      if (index + 1 === this.chain.length) {
        result += `( ${item} )`;
      } else {
        result += `( ${item} )~~`;
      }

    })

    return result;
  }
};



module.exports = {
  chainMaker
};
