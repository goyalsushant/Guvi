// HOISTING WITH VAR

// console.log(a) -> undefined

// var a = 'some value'

// console.log(a)

/**
 * var a
 * console.log(a)
 * a='some value'
 */

// HOISITNG WITH LET
console.log(a)
let a = 1

console.log(a)

// let was hoited but the value as not initialized and that why we get an error. because we can not access variables defined with before initialization

// HOISTING WITH CONST
// console.log(VARIABLE)
// const VARIABLE = 'SECRET'
// console.log(VARIABLE)

// const was hoited but the value as not initialized and that why we get an error. because we can not access variables defined with before initialization

// Temporal Dead Zone - they are present in the memory until the declaration statement is encountered.

// HOISTING IN FUNCTIONS
// greet()

// function greet() {
//     console.log('Hello world')
// }

/**
 * function greet() -> executed straight away and memory is updated
 * greet() -> it will call in the function from the memory.
 */
// console.log(sayHi) // undefined
// sayHi()

// var sayHi = function() {
//     console.log('Hi')
// }
// sayHi()

/**
 * var sayHi -> undefined which is not a callable or is not a function
 * sayHi() -> give an error that sayhi is not a function
 * sayHi = function() {
 *  console.log('Hi')
 *   }
 */


/**
 * var sayHi
 * sayHi = function() {
 *  console.log('Hi')
 *   }
 * sayHi()
 */