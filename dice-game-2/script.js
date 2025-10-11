const score1Total = document.getElementById('score1')
const score2Total = document.getElementById('score2')
const dice1 = document.getElementById('dice1')
const dice2 = document.getElementById('dice2')
const rollButton = document.getElementById('rollButton')
const resetButton = document.getElementById('resetButton')
const result = document.getElementById('result')

let score1 = 0
let score2 = 0
const ROUNDS = 5

rollButton.addEventListener('click', rollDice)
resetButton.addEventListener('click', resetGame)

function rollDice() {
    const player1 = Math.floor(Math.random() * 6) + 1
    const player2 = Math.floor(Math.random() * 6) + 1
    console.log(player1, player2)

    dice1.src = `https://upload.wikimedia.org/wikipedia/commons/${getDiceImage(player1)}`
    dice2.src = `https://upload.wikimedia.org/wikipedia/commons/${getDiceImage(player2)}`

    if (player1 > player2) {
        score1++
        result.innerText = "Player 1 Wins this round!"
    }
    else if (player2 > player1) {
        score2++
        result.innerText = "Player 2 Wins this round!"
    }
    else {
        result.innerText = "It's a Draw"
    }

    updateScoreboard()
    identifyWinner()
}

function getDiceImage(number) {
    const diceFace = {
        1: "1/1b/Dice-1-b.svg",
        2: "5/5f/Dice-2-b.svg",
        3: "b/b1/Dice-3-b.svg",
        4: "f/fd/Dice-4-b.svg",
        5: "0/08/Dice-5-b.svg",
        6: "2/26/Dice-6-b.svg",
    }

    return diceFace[number]
}

function updateScoreboard() {
    score1Total.innerText = score1
    score2Total.innerText = score2
}

function identifyWinner() {
    if (score1 == ROUNDS) {
        result.textContent = "Player 1 Wins the Game!"
        rollButton.disabled = true
    }
    if (score2 == ROUNDS) {
        result.textContent = "Player 2 Wins the Game!"
        rollButton.disabled = true
    }
    console.log('Score count', score1, score2)
}

function resetGame() {
    score1 = 0
    score2 = 0
    updateScoreboard()
    dice1.src = `https://upload.wikimedia.org/wikipedia/commons/${getDiceImage(1)}`
    dice2.src = `https://upload.wikimedia.org/wikipedia/commons/${getDiceImage(1)}`

    result.textContent = ""
    rollButton.disabled = false
}