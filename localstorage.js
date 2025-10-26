const API_URL = 'https://jsonplaceholder.typicode.com/users'

const form = document.getElementById('userForm')
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const submitBtn = document.getElementById('submitBtn')
const tableBody = document.getElementById('userTable')

let users = []
let editId = null

// Load users into local storage - READ
async function loadUsers() {
    const storedUsers = localStorage.getItem('users')
    if (storedUsers) {
        users = JSON.parse(storedUsers)
    }
    else {
        console.log('Fetching users from API.....')
        const response = await fetch(API_URL)
        users = await response.json()
        users.slice(0, 10)
        localStorage.setItem('users', JSON.stringify(users))
    }
    renderTable()
}

function renderTable() {
    tableBody.innerHTML = ""
    users.forEach((user) => {
        const row = `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>
                    <button class="action-btn edit-btn" onClick="editUser(${user.id})">Edit</button>
                    <button class="action-btn delete-btn" onClick="deleteUser(${user.id})">Delete</button>
                </td>
            </tr>
        `

        tableBody.innerHTML += row
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = nameInput.value.trim()
    const email = emailInput.value.trim()

    if (!name || !email) {
        alert("All fields required")
        return
    }

    if (editId) {
        const user = users.find((u) => u.id === editId)
        user.name = name
        user.email = email
        editId = null
        submitBtn.textContent = "Add User"
    }
    else {
        // CREATE Operation
        const newUser = {
            id: users.length ? users.length + 1 : 1,
            name,
            email
        }

        users.push(newUser)
    }

    saveToLocalStorage()
    renderTable()
    form.reset()
})

function deleteUser(id) {
    if (confirm("Are you sure you want to delete this user?")) {
        users = users.filter((u) => u.id !== id)
        saveToLocalStorage()
        renderTable()
        alert('User Deleted')
    }
}

function saveToLocalStorage() {
    localStorage.setItem('users', JSON.stringify(users))
}

function editUser(id) {
    const user = users.find((u) => u.id === id)
    nameInput.value = user.name
    emailInput.value = user.email
    editId = id
    submitBtn.textContent = "Update User"
}

// Initialize the application
loadUsers()