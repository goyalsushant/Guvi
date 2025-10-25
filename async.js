// async function callback() {
//     return 'Some value'
// }

// // console.log(callback())
// callback().then(result => console.log(result))

console.log('Start')

function anotherFunc() {
    console.log('another function')
    new Promise(resolve => setTimeout(()=> resolve('Promise Resolved'), 0)).then(result => console.log(result))
}

async function awaitFunc() {
    console.log('inside async')
    new Promise(resolve => resolve('Resolved')).then(result=>console.log(result))
    anotherFunc()
    console.log('After await')
    return 'A response'
}

awaitFunc()

// let a = awaitFunc()
// a.then(result => console.log(result))
// console.log(a)

console.log('End')