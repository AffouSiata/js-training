'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */
// Your code :

function yell(arg){
    return arg.toUpperCase();

}
//* Begin of tests
const assert = require('assert')


assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell('str'), 'STR')
// End of tests */
