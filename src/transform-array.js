const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    arr = arr.slice();

    if (Array.isArray(arr) === false) throw new Error();

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--discard-next':
                {
                    if (i !== arr.length - 1) {
                        arr.splice(i + 1, 1);
                    }
                    break;
                }

            case '--discard-prev':
                {
                    if (i !== 0)
                        arr.splice(i - 1, 1);
                    break;
                }

            case '--double-next':
                {
                    if (i !== arr.length - 1) {
                        arr.splice(i + 1, 0, arr[i + 1]);
                    }

                    break;
                }

            case '--double-prev':
                {
                    if (i !== 0) {
                        arr.splice(i, 0, arr[i - 1]);
                        i++;
                    }
                    break;
                }
        }
    }

    for (let j = arr.length - 1; j >= 0; j--) {
        if (arr[j].toString().startsWith('--')) {
            arr.splice(j, 1);
        }
    }

    return arr;
};