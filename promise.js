const promise = new Promise((resolve, reject) => {
    const success = true
    if (success) {
        resolve('Promise is successful')
    }
    else {
        reject('Promise failed')
    }
})

// console.log(promise)

promise
    .then((data) => { console.log('resolved', data) })
    .catch((err) => { console.log('rejected', err) })
    .finally(()=>{console.log('Finally executed')})

// console.log(promise)