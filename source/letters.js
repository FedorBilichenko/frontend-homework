'use strict';

/**
 * Removes duplicate symbols
 * @param {string} str - input string
 * @param {boolean|undefined} mode - flag
 * @returns {string|null} newStr - fixed string
 */

function letters(str, mode) {

    if (typeof str !== 'string' || (typeof mode !== 'boolean' && mode !== undefined)) {
        return null;
    }

    const alphabet = {};
    let newStr = '';

    if (mode === undefined){
        for (let symbol of str) {
            alphabet[symbol] = (alphabet[symbol] || 0) + 1;
        }
        for (let symbol of str) {
            if (alphabet[symbol] === 1) {
                newStr += symbol;
            }
        }
        return newStr;
    }
    if (!mode) {
        str = [...str].reverse();
    }
    for (let symbol of str) {
        if (!alphabet[symbol]) {
            newStr += symbol;
        }
        alphabet[symbol] = (alphabet[symbol] || 0) + 1;
    }

    if (!mode){
        return [...newStr].reverse().join('');
    }
    return newStr;
}
