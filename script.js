const API_URL = 'https://jsonplaceholder.typicode.com/users'

const form = document.getElementById('userForm')
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const submitBtn = document.getElementById('submitBtn')
const tableBody = document.getElementById('userTable')

// CRUD using fetch
let editId = null

// READ Operation
async function getUsers() {
    const response = await fetch(API_URL)
    const users = await response.json()
    renderTable(users)
}

function renderTable(users) {
    tableBody.innerHTML = ""
    users.slice(0, 10).forEach((user) => {
        const row = `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>
                    <button class="action-btn edit-btn" onClick="editUser(${user.id}, '${user.name}', '${user.email}')">Edit</button>
                    <button class="action-btn delete-btn" onClick="deleteUser(${user.id})">Delete</button>
                </td>
            </tr>
        `

        tableBody.innerHTML += row
    })
}

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const userData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim()
    }

    if (editId) {
        const updatedUser = await updateUser(userData)
        console.log(updatedUser)
        alert(updatedUser)
    }
    else {
        const newUser = await createUser(userData)
        console.log(newUser)
        alert('New User is Created.')
    }
})

// Create Operation
async function createUser(userData) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    const newUser = await response.json()
    return newUser
}

// Update Operation
function editUser(id, name, email) {
    nameInput.value = name
    emailInput.value = email
    editId = id
    submitBtn.textContent = "Update User"
}

async function updateUser(userData) {
    const response = await fetch(API_URL, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    // console.log(response)
    if (response.ok) {
        const updatedUser = await response.json()
        return 'User Data Updated'
    }
    else {
        return 'API failed'
    }
}

// Delete Operation
async function deleteUser(id) {
    if(confirm("Are you sure you want to delete this user?")) {
        await fetch(`${API_URL}/${id}`, {
            method: "DELETE"
        })
        alert('User Deleted Successfully')
        getUsers()
    }
}

getUsers()