const SpliceSLice = () => {

    const tasks = [
        'Buy Groceries',
        'Clean the room',
        'Read a book',
        'Write a Blog',
        'Do Exercise'
    ]

    const topThree = tasks.slice(0,3)

    const lastTwo = tasks.slice(-2)

    const tasksCopy = [...tasks]

    const removedTask = tasksCopy.splice(-4, 2, ...['Create a webpage', 'Take a nap'])

    return(
        <div>
            <h1>All Tasks</h1>
            <ul>
                {tasks.map(task => <li>{task}</li>)}
            </ul>
            <h1>Top Three Tasks</h1>
            <ul>
                {topThree.map(task => <li>{task}</li>)}
            </ul>

            <h1>Updated Tasks</h1>
            <ul>
                {tasksCopy.map(task => <li>{task}</li>)}
            </ul>

            <h1>Removed Tasks</h1>
            <ul>
                {removedTask.map(task => <li>{task}</li>)}
            </ul>
            <h1>Last Two Tasks</h1>
            <ul>
                {lastTwo.map(task => <li>{task}</li>)}
            </ul>
        </div>
    )
}

export default SpliceSLice