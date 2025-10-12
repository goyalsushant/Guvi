// function fetchData(callback) {
//     console.log('inside fetch')
//     setTimeout(()=>{
//         const user = {name: 'Alice', age: 25}
//         callback(user)
//     }, 1000)
//     console.log('line 7')

// }

// function printData(data) {
//     console.log('User', data)
// }

// fetchData(printData)

const number = ['1','2'];
let cards = [...number, ...number];

console.log(cards)