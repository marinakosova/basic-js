const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let num = solveHanoiTower(disksNumber);

    let result = {
        turns: num,
        seconds: Math.floor(num / turnsSpeed * 3600)
    }

    return result;
};

function solveHanoiTower(disk) {
    let counter = 0;

    if (disk > 0) {
        counter = Math.pow(2, disk) - 1;
    }

    return counter;
}