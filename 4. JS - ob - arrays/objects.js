// Creating an object
// 1. Object literal
// let user = {
//     name: 'Alice',
//     age: 25
// }

// console.log(user)

// 2. Using the object factory
// let obj = new Object() //{}
// console.log(obj)
// obj.prop = 'Some property'

// console.log(obj)

function User(name, age) {
    this.name = name
    this.age = age
}

let user1 = new User('Alice', 25)
let user2 = new User('Tom', 32)
// THese users belong to User Factory type
console.log(user1, user2)

user1.age = 28
user1.location = 'New Delhi'
console.log(user1)

user1.birthYear = 1997
console.log(user1)

delete user1.birthYear
console.log(user1)

console.log(Object.keys(user1))
console.log(Object.values(user1)[0])


// {
//     name: 'Name',
//         hoddies: 'some hobbies',
//             address: {
//         line1: 'line1',
//             line2: 'line2',
//                 pincode: 'PIN'
//     }
// }

let arrayObj = [

    {
        name: 'Name',
        hoddies: 'some hobbies',
        address: {
            line1: 'line1',
            line2: 'line2',
            pincode: 'PIN'
        }
    },

    {
        name: 'Name',
        hoddies: 'some hobbies',
        address: {
            line1: 'line1',
            line2: 'line2',
            pincode: 'PIN'
        }
    }
]

let objJson = {

    0: {
        name: 'Name',
        hoddies: 'some hobbies',
        address: {
            line1: 'line1',
            line2: 'line2',
            pincode: 'PIN'
        }
    },

    1: {
        name: 'Name',
        hoddies: 'some hobbies',
        address: {
            line1: 'line1',
            line2: 'line2',
            pincode: 'PIN'
        }
    }
}

console.log(JSON.stringify(objJson)) // converting the json into a string

let stringjson = JSON.stringify(objJson)

console.log(JSON.parse(stringjson))