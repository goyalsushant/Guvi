// let a = 5 // Global scope
// // not present within function or loops or decision making statements
// console.log('GLobal', a)
// if(a > 10) { // it is just checking if a is defined and has some value other than null
//     let a = 10
//     console.log('if', a)
// }
// else {
//     console.log('global value in else', a)
//     let a=20
//     console.log('else', a)
// }

// console.log('back to global', a) 
// var i
// for(let i=0;i<5;i++) {
//     console.log(i)
// }
// console.log(i) // global scoped i

function outer() {
    let outervar = 'outer'
    console.log(23, outervar)

    function inner() {
        let innervar = 'inner'
        console.log(27, outervar)
        console.log(28, innervar)
        outervar = 5
    }
    inner()
    // console.log(32, innervar)
    console.log(33, outervar)
}

outer()