console.log('Start')

setTimeout(()=>{
    console.log('Inside Timeout')
}, 0)

Promise.resolve().then(()=>{
    console.log('Inside Promise')
})

console.log('End')