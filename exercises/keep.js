'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:
function keepFirst(ch){

    var resul = ch.substring(0, 2);
    return ch;

}
function keepLast(ch){

    var resul = ch.substring(5, ch.length);
    return ch;
}






//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(typeof keepLast, 'function')

// End of tests */
