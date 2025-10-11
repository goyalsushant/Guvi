document.getElementById('rollButton').addEventListener('click', rollDice)

function rollDice() {
    const player1 = Math.floor(Math.random() * 6) + 1
    const player2 = Math.floor(Math.random() * 6) + 1
    console.log(player1, player2)

    // document.getElementById('dice1').setAttribute('src', `https://upload.wikimedia.org/wikipedia/commons/${getDiceImage(player1)}`)
    // document.getElementById('dice2').setAttribute('src', `https://upload.wikimedia.org/wikipedia/commons/${getDiceImage(player2)}`)

    document.getElementById('dice1').src = `https://upload.wikimedia.org/wikipedia/commons/${getDiceImage(player1)}`
    document.getElementById('dice2').src = `https://upload.wikimedia.org/wikipedia/commons/${getDiceImage(player2)}`

    const result = document.getElementById('result')
    if (player1 > player2) {
        result.innerText = "Player 1 Wins"
    }
    else if (player2 > player1) {
        result.innerText = "Player 2 Wins"
    }
    else {
        result.innerText = "It's a Draw"
    }
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