// function checkNumber(x) {
//     // call in the payment gateway and wait for the resolution
//     if (x % 2 == 0) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// let x = 2
// let isEven = checkNumber(x)
// if(isEven) {
//     console.log('It is divisible by 2')
// }
// else {
//     console.log('It is not divisible by 2')
// }

// is even - it is divisible by 2
// is odd - not divisbile by 2 




// x = 25

// if(x % 2 == 0) {
//     console.log('even number')
// }
// else {
//     console.log('odd number')
// }



// x = 100
// if(x % 2 == 0) {
//     console.log('even number')
// }
// else {
//     console.log('odd number')
// }


// function greet(name) { // function definition
//     console.log('Hello ' + name)
// }

// greet('Javascript') // calling in the function
// greet('Python')
// greet('HTML')
// greet('CSS')

let cart = ['some object']
// let payConfirm = false
let amount = 500
let receiver = 'AMAzon'

function gatewayResponse(amount, receiver) {
    let amountPaid = true
    if (amountPaid && receiver == 'Amazon') {
        return true
    }
    else {
        return false
    }

    // return (amountPaid && receiver == 'Amazon') ? true : false // Ternary operator
    // return (amountPaid && receiver == 'AMAzon') ?? false // Null Coalescing Operator

}

function paymentConfirmation(amount, receiver) {
    let paymentResp = gatewayResponse(amount, receiver)

    if (paymentResp) console.log('Order placed successfully')
    else console.log('Payment not received.')
}

paymentConfirmation(amount, receiver)

