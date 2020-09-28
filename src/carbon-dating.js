const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    let sampleActivityNum = Number(sampleActivity);

    if (typeof(sampleActivityNum) != Number) {
        return false;
    } else {
        sampleActivityNum = Math.ceil((Math.log(MODERN_ACTIVITY / 8)) / (0.693 / HALF_LIFE_PERIOD));
        return sampleActivityNum;
    }
};