typeof 1 // number
typeof 'hello' // string
typeof {} // object
typeof [] // object -> array is a special kind of object
typeof null // obect -> historical bug in javascript
typeof undefined // undefined
typeof function func(){} // function
typeof 1n // bigint
typeof true // boolean

let arr = []
arr instanceof Array // true
arr instanceof Object // true -> because of prototype inheritance
let obj = {} 
obj instanceof Object // true

function a () {

}
a instanceof Object // true -> beacause of prototype
a instanceof Function // true

2 instanceof Number // false -> number is primitive data type
new Number(2) instanceof Number // true
'hello' instanceof String // false -> string is primitive data type
new String('hello') instanceof String // true