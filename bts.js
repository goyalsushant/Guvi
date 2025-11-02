// let a = 5
// var b = 7
// const c = 10

// function func1() {
//     console.log('Inside func1')
//     new Promise((resolve) => resolve('Promise Resolved'))
//     console.log('Exit func1')
// }

// func1()

// console.log(a)
// console.log(b)
// console.log(c)

// const promise1 = new Promise((resolve, reject) => resolve('Promise 1 resolved'))
// const promise2 = new Promise((resolve, reject) => resolve('Promise 2 resolved'))
// const promise3 = new Promise((resolve, reject) => reject('Promise 3 resolved'))
// const promise4 = new Promise((resolve, reject) => resolve('Promise 3 resolved'))
// const promise5 = new Promise((resolve, reject) => resolve('Promise 3 resolved'))

// console.log('start')

// async function func1() {
//     console.log('Inside func1')
//     await new Promise((resolve, reject) => {
//         reject('promise resolved')
//     }).then(res => console.log(res))
//     .catch(err => console.log(err))
//     console.log('exit func1')
// }

// func1()
// console.log('end')

// const data = {
//     name: 'Alice',
//     username: 'alice1',
//     email: `alice1@


//     example.com`,
//     studentId: 101
// }

// let string = JSON.stringify(data)

// console.log(string)

// console.log(JSON.parse(string))


async function createPost() {
    const postData = {
        title: 'New Post',
        body: 'This is the content of the new blog',
        userId: '1'
    }
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return response
}

const data = createPost()
data.then(res => res.json()).then(response => console.log(response)).catch(err => console.log(err))
