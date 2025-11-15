const PushPop = () => {
    const users = [
        { name: 'Alice', age: 25, id: 1 },
        { name: 'John', age: 27, id: 2 },
        { name: 'Jack', age: 29, id: 3 },
        { name: 'King', age: 22, id: 4 },
        { name: 'Queen', age: 29, id: 5 },
        { name: 'John', age: 29, id: 5 },
    ]

    const fruits = [
        'mango',
        'apple',
        'orange',
        'banana',
        'mango'
    ]

    const addItem = () => {
        const user = { name: 'Javascript', age: 30, id: users.length + 1 }

        users.push(user)

        console.log(users)
    }

    const removeItem = () => {
        // const user = {name: 'Javascript', age: 30, id: users.length+1}

        users.pop()

        console.log(users)

    }

    const itemIndex = fruits.indexOf('mango')
    console.log(itemIndex)

    const itemIndexUser = users.findIndex(user => user.name === 'John')
    console.log(itemIndexUser)


    return (
        <>
            {/* <button onClick={addItem}>Add Item</button>
            <button onClick={removeItem}>Remove Item</button>
            <ul>
                {
                    users.map(user => <li>{user.name}, {user.age}</li>)
                }
            </ul> */}

            {itemIndex !== -1 ? `Found fruit at index ${itemIndex}` : 'Fruit not found.'}
            <br />
            {itemIndexUser !== -1 ? `Found user at index ${itemIndexUser}` : 'User not found.'}
        </>
    )
}

export default PushPop