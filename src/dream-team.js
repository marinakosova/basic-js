const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let finalString = [];

    if (!Array.isArray(members)) {
        return false;
    } else {
        for (let i = 0; i < members.length; i++) {
            if (typeof members[i] == "string" && members[i] !== '') {
                let stringLett = members[i].trim().split('');
                finalString.push(stringLett[0].toUpperCase());
            }
        }
    }

    return finalString.sort().join('');
}