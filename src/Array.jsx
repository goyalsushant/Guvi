const ArrayComponent = (props) => {

    const users = [
        { name: 'Alice', age: 25, id:1 },
        { name: 'John', age: 27, id:2 },
        { name: 'Jack', age: 29, id:3 },
        { name: 'King', age: 22, id:4 },
        { name: 'Queen', age: 19, id:5 },
    ]

    // const emailIdArray = []

    // users.forEach((user) => {
    //     // send email here
    //     // and log for any error or bounce mails
    // })

    // make an api call to the server to send bulk emails
    // gmail / aws ses / outlook -> send mails

    let personDetails

    const a =users.forEach((user) => {
        if(user.id == props.id) {
            personDetails = user
        }

        return 1
    })

    console.log(a)

    const filteredUsers = users.filter((user) => user.age >= 27)

    console.log(filteredUsers, users)

    const canBookTickets =users.every((user) => user.age >27)
    const canBookRide =users.some((user) => user.age >27)

    return (
        <>
        {/* {personDetails && (
            <div>{personDetails.name}, {personDetails.age}</div>
        )} */}
            <ul>
                <h1>All users</h1>
                {
                    users.map((user) => <li>User name is {user.name.toLowerCase()} and age is {user.age}</li>)
                }
                <h1>Users with Age greater than or equal to 27</h1>
                {
                    filteredUsers.map((user) => <li>User name is {user.name.toLowerCase()} and age is {user.age}</li>)
                }
            </ul>

            {canBookTickets ? 'User can book tickets' : 'Ticket Booking not allowed'}
            <br />
            {canBookRide ? 'User can book ride' : 'Ride Booking not allowed'}
        </>
    )
}

export default ArrayComponent