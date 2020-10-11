const CustomError = require("../extensions/custom-error");

const chainMaker = {
    arrayOfStrings: [],
    getLength() {
        let len = this.arrayOfStrings.length;
        this.arrayOfStrings = [];
        return len;
    },
    addLink(value) {
        if (typeof String('value')) {
            this.arrayOfStrings.push(`( ${value} )`);
            return this;
        } else {
            this.arrayOfStrings.push('(  )');
            return this;
        }
    },
    removeLink(position) {
        if (Number.isInteger(position) && position > 0 && position <= this.arrayOfStrings.length) {
            this.arrayOfStrings.splice(position - 1, 1);
            return this;
        } else {
            this.arrayOfStrings = [];
            throw new Error('Error');

        }
    },
    reverseChain() {
        this.arrayOfStrings.reverse();
        return this;
    },
    finishChain() {
        let finalChain = this.arrayOfStrings.join('~~').toString();
        this.arrayOfStrings = [];
        return finalChain;
    }
};

module.exports = chainMaker;