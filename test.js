console.log('Start')

async function anotherfunction(){
    console.log('Inside Function')
    await new Promise(resolve => resolve('inside function resolve'))
    .then(result => console.log(result))
}

async function asyncFunctionExample(){
    console.log('async function start')
    await new Promise(resolve => resolve('async function resolve'))
    .then(result => console.log(result))
    anotherfunction()
    console.log('async function end')
}

asyncFunctionExample()
console.log('End')