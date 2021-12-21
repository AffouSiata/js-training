'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:

function jadenCase(str){
    let words = str.toLowerCase().split(" ");
    let array =[];
    words.forEach(word => {
        let first = word.charAt(0).toUpperCase();
        let rem = word.replace(word.charAt(0),first);

       array.push(rem);
    });
   array.join(" ");
}
jadenCase("je suis developpeuse");

//* Begin of tests
const assert = require('assert')


assert.strictEqual(typeof jadenCase, "function")
//  assert.strictEqual(jadenCase('str'), 'Str')
//  assert.strictEqual(jadenCase('la vie est belle'), 'La Vie Est Belle')
//  assert.strictEqual(jadenCase('STR'), 'Str')
//  assert.strictEqual(jadenCase('zapZAP'), 'Zapzap')

// End of tests */
