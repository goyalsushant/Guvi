// console.log('Start')

// async function awaitFunc() {
//     console.log('inside async')
//     await new Promise(resolve => resolve('Resolved')).then(result=>console.log(result))
//     console.log('After await')
//     return 'A response'
// }

// // awaitFunc()

// let a = awaitFunc()
// a.then(result => console.log(result))
// console.log(a)

// console.log('End')

console.log('Start')

async function awaitFunc() {

    // try {
        console.log('inside async')
        await new Promise((resolve, reject) => reject('Rejected'))
        console.log('After await')
        return 'A response'
    // }
    // catch (err) {
    //     console.log('Error generated')
    // }

}

// awaitFunc()

let a = awaitFunc()
a.then(result => console.log(result)).catch(err => console.log('a', err))
console.log(a)

console.log('End')

