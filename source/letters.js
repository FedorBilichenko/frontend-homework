'use strict';

/**
 * Removes duplicate symbols in a string
 * @param {string} str - input string
 * @param {boolean|undefined} mode - flag:
 * if mode is undefined, it removes all duplicate symbols;
 * if mode is true, it removes all duplicate symbols after first one;
 * if mode is false, it removes all duplicate symbols before last one;
 * @returns {string|null} newStr - fixed string
 */
const letters = (str, mode) => {

    if (typeof str !== 'string' || (typeof mode !== 'boolean' && mode !== undefined)) {
        return null;
    }

    if (mode === undefined){
        const alphabet = [...str].reduce((alphabet, symbol) => ({
            ...alphabet,
            [symbol]: (alphabet[symbol] || 0) + 1
        }), {});
        return [...str].filter((symbol) => alphabet[symbol] === 1).join('');
    }

    let arrFromStr = [...str];
    if (!mode) {
        arrFromStr = arrFromStr.reverse();
    }

    const alphabet = {};
    const newStr = arrFromStr.filter((symbol) => {
        alphabet[symbol] = (alphabet[symbol] || 0) + 1;
        return alphabet[symbol] === 1;
    });

    return mode ? newStr.join('') : newStr.reverse().join('');
};
