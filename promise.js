// const newPromise = new Promise((resolve, reject) => {
//     const success = true
//     if (success) {
//         resolve('The operation was successful')
//     }
//     else {
//         reject('Something went wrong')
//     }
// })

// console.log(newPromise)

// newPromise
//     .then((result) => { console.log(result) })
//     .catch(err => console.log(err))

// // Chaining of Successful Responses
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Data Fetched'), 1000)
// })

// promise
//     .then(data => {
//         console.log(data)
//         return 'Processing Data.....'
//     })
//     .then(message => {
//         console.log(message)
//         return 'Data Processed....'
//     })
//     .then(complete => console.log(complete))
//     .catch(err => console.log(err))

// Error Handling in Promise Chain
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data Fetched'), 1000)
})

const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=> reject('An error occured in second step'), 1000)
})

promise
    .then(data => {
        console.log(data)
        return promise2
    })
    .then(message => {
        console.log(message)
        return 'Data Processed....'
    })
    .then(message => console.log(message))
    .catch(err => console.log(err))
    .finally(()=>{
        console.log('Cleanup in progress')
    })