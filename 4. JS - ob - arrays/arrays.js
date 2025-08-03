let numeric = [1,2,3,4]
let string = ['a', 'b', 'c']
let mixed = [1, 'a', true, null]

// Array is not defined based on a specific type of value. 
// It can contain any value with any data type.

let arrOfObjects = [
    {name: 'JS'},
    {name: 'Python'}
]

let nestedArray = [
    [1,2,3],
    [4,5,6]
]

// How to access array elements:
// Using for loop
// let arr = [1,2,3,4,5,6] // 0-indexed obects meaning the first element is present on the key with 0 as in key=0
/**
 * key - value
 * 0 - 1
 * 1 - 2
 * 2 - 3
 * 3 - 4
 * 4 - 5
 * 5 - 6
 */
// we know how many iterations are to be performed 
// for(let i=0; i<6;i++) {
//     console.log(arr[i])
// }

// for(let i=0; i < arr.length;i++) {
//     console.log(arr[i])
// }

// let multi = [
//     [1,2,3],
//     [4,5,6, 7]
// ]

// for(let i=0;i<multi.length;i++) {
//     // console.log(multi[i].length)
//     for(let j=0;j<multi[i].length;j++) {
//         console.log(multi[i][j])
//     }
// }

let arr = [1,2,3]
let y = arr.forEach((ele, index) => {
    // console.log(index, ele)
    return ele * ele
}) 
console.log(arr)
console.log(y)

let x = arr.map((ele) => {
    return ele * ele   
})
console.log(arr)
console.log(x)

let z = arr.filter((n) => n%2==1)
console.log(z)

let nums = [1,2,3,4]
// acc= accumulator which keeps track of previous values
// curr = the current element value
let sum = nums.reduce((acc, curr)=> acc+curr) // it reduces the array values into a single value
console.log(sum)

nums.push(5) // it adds the element to the end of the array
console.log(nums)

nums.pop() // it will remove the last element from the array
console.log(nums)

nums.shift() // will remove the element from the start
console.log(nums)
// sort() -> it will sort the unordered array
// reverse() -> it will reverse the array
// unshift() -> it will add an element to start
// splice() -> it ill remove the element from anywhere within the array


