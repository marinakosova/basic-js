const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (arr instanceof Array) {
            let depth = 0;
            for (let i = 0; i < arr.length; i++) {
                let current = this.calculateDepth(arr[i]);
                if (depth < current) {
                    depth = current;
                }
            }
            return 1 + depth;
        } else {
            return 0;
        }
    }
};