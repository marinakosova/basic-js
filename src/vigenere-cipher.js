const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

    constructor(isReverse1) {
        if (isReverse1 === undefined) {
            this.isReverse = true;
        } else {
            this.isReverse = isReverse1;
        }
    }

    // This function generates the key 
    // until it's length is equal to the
    // length of the message.
    generateKey(message, key) {
        // Adding the key to itself as long as
        // the key is shorter than the message.
        while (key.length < message.length)
            key += key;

        // it may be that the key is now longer
        // than the message. So - trimming it!
        key = key.substring(0, message.length);
        return key.toUpperCase();
    }

    encrypt(message, key) {
        key = this.generateKey(message, key);
        message = message.toUpperCase();

        let cipherText = [];
        let keyIndex = 0; // To skip non-letter chars when using the key
        for (let i = 0; i < message.length; i++) {
            if (message[i] >= 'A' && message[i] <= 'Z') {
                let x = (message.charCodeAt(i) + key.charCodeAt(keyIndex)) % 26;
                x += 'A'.charCodeAt(0); // 65 
                cipherText.push(String.fromCharCode(x)); // 66 => 'B'
                keyIndex++;
            } else {
                cipherText.push(message[i]);
            }
        }
        return this.isReverse ? cipherText.join('').toUpperCase() : cipherText.reverse().join('').toUpperCase();
    }
    decrypt(message, key) {
        key = this.generateKey(message, key);
        message = message.toUpperCase();

        let origText = [];
        let keyIndex = 0;
        for (let i = 0; i < message.length; i++) {
            if (message[i] >= 'A' && message[i] <= 'Z') {
                let x = (message.charCodeAt(i) - key.charCodeAt(keyIndex) + 26) % 26;
                x += 'A'.charCodeAt(0);
                origText.push(String.fromCharCode(x));
                keyIndex++;
            } else {
                origText.push(message[i]);
            }
        }
        return this.isReverse ? origText.join('').toUpperCase() : origText.reverse().join('').toUpperCase();
    }
}

module.exports = VigenereCipheringMachine;