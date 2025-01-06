const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  values: [],
  getLength() {
    return this.getChain().length;
  },
  addLink(value) {
    this.values.push(String(value));
    return this;
  },
  removeLink(position) {
    if (typeof position != 'number' || position < 1 || position > this.values.length) {
      this.values = [];
      throw Error('You can\'t remove incorrect link!');
    }
    this.values.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.values.reverse();
    return this;
  },
  finishChain() {
    let result = this.getChain();
    return this.getResultAndClear(result);
  },
  getChain() {
    return this.values.map((v) => '( ' + v + ' )').join('~~');
  },
  getResultAndClear(str) {
    this.values = [];
    return str;
  }
};

module.exports = {
  chainMaker
};
