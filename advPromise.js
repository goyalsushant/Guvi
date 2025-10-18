const promise1 = new Promise((resolve, reject) => {
    let i = 0
    setInterval(() => reject('Task One Failed'), 1000)
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Task Two Completed'), 1000)
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Task Three Completed'), 1000)
})

promise1.then(message => console.log(message)).catch(err=>console.log(err))
promise2.then(message => console.log(message)).catch(err=>console.log(err))
promise3.then(message => console.log(message)).catch(err=>console.log(err))

Promise
    .all([promise1, promise2, promise3])
    .then((result) => { console.log(result) })
    .catch(err => console.log('All result - ', err))