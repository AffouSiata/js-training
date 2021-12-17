'use strict'

/*
 * Create a `capitalize` function that takes a string
 * and transforms it to upper case only for the first letter,
 * and in lowercase for the rest of the string
 *
 */
// Your code :
function capitalize(str){
    var resul =str.substring(0,1);
    var mm = resul.toUpperCase()+str.substring(1,str.lenght).toLowerCase();
    return mm;
}






//* Begin of tests
const assert = require('assert');
const { stringify } = require('querystring');

assert.strictEqual(typeof capitalize, "function")
assert.strictEqual(capitalize('str'), 'Str')
assert.strictEqual(capitalize('qsdqsdqsd'), 'Qsdqsdqsd')
assert.strictEqual(capitalize('STR'), 'Str')
assert.strictEqual(capitalize('zapZAP'), 'Zapzap')
// End of tests */
