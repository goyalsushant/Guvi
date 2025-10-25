function asyncTasks(time) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(time < 0) reject('Time can not be negative')
            else resolve(`Task completed in ${time}`)
        }, time)
    })
    // .then(result => console.log(result))
    // .catch(err=> console.log(err))
}

async function executeTasks() {
    try {
        console.log('Starting Task 1')
        const result1 = asyncTasks(1000)
        console.log(result1)

        console.log('Starting Task 2')
        const result2 = asyncTasks(500)
        console.log(result2)

        console.log('Starting Task 3')
        const result3 = asyncTasks(-1000)
        console.log(result3)
    }
    catch (err) {
        console.log('Error Occured: ', err)
    }
}

executeTasks()