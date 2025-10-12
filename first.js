
console.log('Start')

setTimeout(()=>{
    console.log('Inside timeout')
}, 0)

console.log('End')

/**
 * As per synchronous operation
 * console Start
 * set timeout
 * it looks at the function
 * console Inside Timeout
 * exit timeout
 * console End
 * 
 */

/**
 * As per async operation
 * console Start
 * encounter setTimeout
 * passes the control to the browser - receives go ahead for next execution
 * console End
 * check for further executable lines - founds none
 * responds to browser - browser / event loop checks for available code to be executed
 * executes setTimeout
 * console Inside Timeout
 */