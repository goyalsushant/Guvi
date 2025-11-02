// // function example() {
// //     console.log(a)
// //     console.log(b)

// //     var a = 10
// //     let b = 5
// //     if (true) {
// //         var a = 20
// //         let b = 1
// //         const c = 12
// //         console.log(b, c)
// //     }
// //     console.log(a, b)
// // }

// // example()


// // let a = 10
// // var b = 2

// // function scope() {
// //     let a = 20
// //     console.log(a)

// //     if (true) {
// //         let a = 30
// //         console.log(a)
// //     }
// //     else {
// //         let a = 'else'
// //         console.log(a)
// //     }
// // }

// // console.log(a)

// // scope()
// // console.log(a)

// // Arrow Functions

// // const scope = (b) => {
// //     let a = 10
// //     console.log(a, b)
// // }

// // scope(5)

// // function example() {
// //     let a = 20
// //     console.log(a)
// // }

// // example()

// // const greet = n => n*n
// // greet(5)

// var obj = {
//     name: 'Alice',
//     sayName: function() {
//         console.log(this.name)
//     }
// }

// obj.sayName()



// let obj2 = {
//     name: 'Candice',
//     sayName: (name) => {
//         console.log(this.name)
//     }
// }
// obj2.sayName('John')

// // let name = 'Alice'
// // let greeting = 'Hello'

// // console.log(`${greeting}, ${obj.sayName()}. 
// //     Welcome to Javascript`)


// //     console.log(`${5+4}`)

// // let a=  [1,2,3]
// // let b = [...a, 4, 5]

// // console.log(b)

// // const person = {
// //     name: 'John',
// //     age: 25
// // }

// // const update = {
// //     ...person,
// //     city: 'Delhi'
// // }

// // console.log(update)

// // function sum(...nums) {
// //     return nums.reduce((acc, val) => acc+val)
// // }

// // console.log(sum(1,2,3,4))

// // const arr = [1,2,3]

// // const newArr = [0, ...arr, 5, 6]
// // console.log(newArr)


// let obj = {
//     name: 'Alice',
//     age: '25',
//     location: 'New York',
//     // email: 'alice@example.com'
// }

// let { name, email = 'NA' } = obj

// console.log(name, email)

// let arr = [1, 2, 3, 4]

// let [first, , , fourth] = arr

// console.log(first, fourth)

/**
 * Red - Primary
 * Green - Secondary
 * Blue - Tertiary
 */

// let colors = ['red', 'blue', 'green']
// let [primary, tertiary, secondary] = colors

// console.log(primary, secondary, tertiary)

let buffet = ['potatoes', 'chickpeas', 'noodles', 'pizza', 'pasta', 'burger', 'salad']

/**
 * Potatoes - skip
 * chickpeas - skip
 * noodles - skip
 * pizza - yes, i will have it
 * pasta - yes, i will have it
 */

// let [, , , item1, item2] = buffet
// let [, , item1, , item2] = buffet

// console.log(item1, item2)

let buffetObj = {
    item1: 'potatoes',
    item2: 'chickpeas',
    item3: 'noodles',
    item4: 'pizza',
    item5: 'pasta',
    item6: 'burger',
    item7: 'salad'
}

let { item3, item5 } = buffetObj
console.log(item3, item5)