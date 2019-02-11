'use strict';

/**
 * Removes duplicate symbols
 * @param {string} str - input string
 * @param {boolean|undefined} mode - flag
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

    str = [...str];
    if (!mode) {
        str = str.reverse();
    }

    const alphabet = {};
    const newStr = str.filter((symbol) => {
        alphabet[symbol] = (alphabet[symbol] || 0) + 1;
        return alphabet[symbol] === 1;
    });

    return mode ? newStr.join('') : newStr.reverse().join('');
};
