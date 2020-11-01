const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    str = String(str);

    let repeatTimes = options.repeatTimes || 1;
    let separator = options.separator || '+';
    let addition = options.addition || '';
    let additionRepeatTimes = options.additionRepeatTimes || 1;
    let additionSeparator = options.additionSeparator || '|';

    let arr = [];

    for (let i = 0; i < repeatTimes; i++) {
        let arrStr = str;
        let arrStr2 = [];
        for (let j = 0; j < additionRepeatTimes; j++) {
            arrStr2.push(String(addition));
        }
        arrStr = arrStr + arrStr2.join(additionSeparator);
        arr.push(arrStr);
    }

    return arr.join(separator);
}